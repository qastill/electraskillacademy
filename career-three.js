import * as THREE from './vendor/three/three.module.min.js';

// Original procedural meshes: real articulated geometry, no image/frame animation.
const TAU=Math.PI*2;
const COLORS=[0x3d6159,0x58616b,0x406354,0x46566a,0x313d52,0xb29b7d,0x467371,0xa96936,0x3e414a,0x526b56,0x7a8472,0x334f68,0x6c714f,0x497379,0x525e62,0x454b6b];
function material(color,metalness=0,roughness=.65){return new THREE.MeshStandardMaterial({color,metalness,roughness});}
function mesh(parent,geo,mat,x=0,y=0,z=0){const o=new THREE.Mesh(geo,mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o;}
function box(p,m,x,y,z,w,h,d){return mesh(p,new THREE.BoxGeometry(w,h,d),m,x,y,z);}
function ellipsoid(p,m,x,y,z,a,b,c){const o=mesh(p,new THREE.SphereGeometry(1,24,16),m,x,y,z);o.scale.set(a,b,c);return o;}
function cylinder(p,m,x,y,z,r1,r2,h){return mesh(p,new THREE.CylinderGeometry(r1,r2,h,32),m,x,y,z);}
function joint(p,x,y,z){const g=new THREE.Bone();g.position.set(x,y,z);p.add(g);return g;}
function tube(p,points,r,m){return mesh(p,new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(v=>new THREE.Vector3(...v))),32,r,8,false),m);}
function limb(p,m,length,top,bottom){return cylinder(p,m,0,-length/2,0,top,bottom,length);}
function screen(p,x,y,z,w=.22,h=.3){const g=joint(p,x,y,z);const shell=material(0x17232b,.25,.35),glass=material(0x102c35,.25,.18),light=material(0x74c5af);light.emissive.set(0x397c65);light.emissiveIntensity=.5;box(g,shell,0,0,0,w,h,.028);box(g,glass,0,0,.017,w*.85,h*.85,.005);for(let i=0;i<4;i++)box(g,light,-w*.13,h*(.23-i*.14),.022,w*(.3+(i%2)*.25),.006,.003);return g;}
function makeHuman(parent,id){
 const n=Number(id.slice(1)),professional=[5,6,9,11].includes(n),female=[6,10,11,14].includes(n);
 const root=joint(parent,-.33,0,.3),body=joint(root,0,.88,0);root.rotation.y=-.12;
 const skin=material([0xbc8969,0xd6a481,0x9a664d,0xc49172][n%4],0,.72),cloth=material(COLORS[n-1],0,.86),trouser=material(professional?0x252b32:0x273d38,0,.9),boot=material(0x171c1b,.05,.66),hair=material(n%3===0?0x312820:0x171d1b,0,.93),reflect=material(0xa9b7a5,.25,.5),seam=material(0x1a2927,0,.9);
 const shoulderWidth=female?.205:.235;
 // Tapered jacket with a rounded chest and realistic adult proportions.
 const points=[[.155,0],[.17,.04],[.165,.16],[shoulderWidth,.35],[shoulderWidth*.96,.43],[.115,.49]].map(([r,y])=>new THREE.Vector2(r,y));
 const torso=mesh(body,new THREE.LatheGeometry(points,32),cloth,0,.04,0);torso.scale.z=.62;
 box(body,seam,0,.295,.119,.008,.42,.007);
 for(const side of [-1,1]){box(body,cloth,side*.095,.36,.123,.11,.10,.016);box(body,reflect,side*.095,.405,.135,.105,.009,.008);}
 cylinder(body,trouser,0,.025,0,.17,.165,.10).scale.z=.7;
 box(body,boot,0,.065,.005,.34,.035,.235);box(body,reflect,0,.065,.129,.042,.03,.012);
 if(!professional){for(const side of [-1,1]){box(body,reflect,side*.136,.29,.133,.027,.34,.006);}box(body,reflect,0,.15,.129,.335,.025,.009);}
 const neck=cylinder(body,skin,0,.565,0,.052,.057,.13);
 const head=joint(body,0,.705,0);head.rotation.y=.05;
 ellipsoid(head,skin,0,0,0,.086*(female?.94:1),.118,.092);
 ellipsoid(head,skin,0,-.053,.028,.066,.065,.064);
 ellipsoid(head,skin,0,-.006,.09,.014,.032,.022);
 ellipsoid(head,skin,0,-.025,.105,.018,.01,.012);
 for(const side of [-1,1])ellipsoid(head,skin,side*.086,-.008,0,.013,.028,.017);
 const eyes=[];const white=material(0xcac8b7),iris=material(0x352f24),black=material(0x121616);
 for(const side of [-1,1]){const eye=joint(head,side*.035,.023,.081);ellipsoid(eye,white,0,0,0,.016,.008,.005);ellipsoid(eye,iris,0,0,.004,.006,.006,.003);ellipsoid(eye,black,0,0,.006,.0025,.0035,.001);eyes.push(eye);const brow=ellipsoid(head,hair,side*.035,.040,.080,.020,.0035,.004);brow.rotation.z=side*-.1;}
 const lips=material(0x875348);ellipsoid(head,lips,0,-.051,.086,.024,.0035,.004);
 const hairCap=mesh(head,new THREE.SphereGeometry(.09,24,16,0,TAU,0,Math.PI*.55),hair,0,.036,-.014);hairCap.scale.set(1,1.13,1);
 if(female){ellipsoid(head,hair,0,.01,-.09,.065,.095,.035);ellipsoid(head,hair,0,-.035,-.14,.036,.082,.035);}
 if(!professional){const helmet=material(n===10?0xe2bd59:0xd9ddd1,.08,.44);const dome=mesh(head,new THREE.SphereGeometry(.104,32,16,0,TAU,0,Math.PI*.49),helmet,0,.072,0);dome.scale.z=1.11;cylinder(head,helmet,0,.075,.008,.115,.115,.012).scale.z=1.15;box(head,helmet,0,.175,-.002,.012,.012,.105);}
 else if(n===5||n===6){const glasses=material(0x20282a,.3,.3);for(const side of [-1,1]){const frame=mesh(head,new THREE.TorusGeometry(.020,.002,8,24),glasses,side*.035,.023,.092);frame.scale.y=.65;}box(head,glasses,0,.026,.093,.03,.003,.004);}
 const arms=[];
 for(const side of [-1,1]){
  const shoulder=joint(body,side*shoulderWidth,.435,0);shoulder.rotation.z=side*.10;
  ellipsoid(shoulder,cloth,0,-.025,0,.076,.095,.079);limb(shoulder,cloth,.265,.070,.050);
  const elbow=joint(shoulder,0,-.265,0);ellipsoid(elbow,cloth,0,0,0,.05,.055,.05);limb(elbow,cloth,.255,.050,.035);
  cylinder(elbow,reflect,0,-.205,0,.039,.037,.027);
  const hand=joint(elbow,0,-.286,0);ellipsoid(hand,skin,0,0,0,.033,.052,.016);
  for(let f=0;f<4;f++)ellipsoid(hand,skin,(f-1.5)*.014,-.045,0,.006,.034-Math.abs(f-1.5)*.003,.007);
  const thumb=ellipsoid(hand,skin,side*.031,-.009,.003,.011,.028,.012);thumb.rotation.z=side*.5;
  arms.push({shoulder,elbow,hand});
 }
 const legs=[];
 for(const side of [-1,1]){
  const hip=joint(root,side*.10,.89,0);limb(hip,trouser,.405,.088,.059);
  const knee=joint(hip,0,-.405,0);ellipsoid(knee,trouser,0,0,0,.058,.073,.058);limb(knee,trouser,.39,.058,.042);
  ellipsoid(knee,boot,0,-.389,.047,.065,.062,.128);box(knee,boot,0,-.427,.044,.128,.025,.238);
  for(let f=0;f<3;f++)box(knee,reflect,0,-.367,.06+f*.021,.072,.003,.003);
  if(!professional)cylinder(knee,reflect,0,-.24,0,.050,.049,.032);
  legs.push({hip,knee});
 }
 // A tablet fixed to the left hand, with an articulated hand supporting it.
 const tablet=screen(arms[0].hand,.015,-.015,.045,.17,.23);tablet.rotation.x=-.4;
 arms[0].shoulder.rotation.x=-.42;arms[0].shoulder.rotation.z=-.20;arms[0].elbow.rotation.x=-1.12;
 arms[1].shoulder.rotation.x=-.55;arms[1].elbow.rotation.x=-.8;
 if(n===10){root.position.y=-.36;root.rotation.y=.3;legs[0].hip.rotation.x=-1.12;legs[0].knee.rotation.x=1.65;legs[1].hip.rotation.x=.48;legs[1].knee.rotation.x=1.15;body.rotation.x=.14;tablet.scale.setScalar(.7);}
 if(n===3){tablet.visible=false;const camera=joint(arms[1].hand,0,-.025,.04);box(camera,material(0x263036),0,0,0,.10,.075,.12);cylinder(camera,material(0x4d6462,.6,.3),0,0,.075,.025,.025,.04).rotation.x=Math.PI/2;screen(camera,0,0,-.064,.065,.044).rotation.y=Math.PI;}
 return {root,body,head,eyes,arms,legs,number:n};
}
function makeWorld(parent,id){
 const n=Number(id.slice(1)),g=joint(parent,.75,0,-.28),metal=material(0x637875,.65,.36),dark=material(0x192b2b,.35,.45),white=material(0xc4d2c9,.35,.3),blue=material(0x153b53,.55,.22),gold=material(0xcc9853,.4,.35),black=material(0x141b20,.15,.68),green=material(0x91d5af,.1,.4);
 green.emissive.set(0x62b899);green.emissiveIntensity=.5;const animated={};
 function cabinet(x=0,w=.55,h=1.2){box(g,dark,x,h/2,0,w,h,.42);box(g,metal,x,h/2,.22,w*.94,h*.96,.025);box(g,black,x+w*.36,h*.5,.247,.025,.17,.025);screen(g,x,h*.76,.25,w*.55,.22);for(let i=0;i<7;i++)box(g,black,x,.17+i*.027,.244,w*.7,.009,.006);return g;}
 function pv(x=0,z=0){const panel=joint(g,x,.66,z);panel.rotation.x=-.45;box(panel,metal,0,0,0,.97,.65,.04);box(panel,blue,0,0,.027,.91,.59,.016);for(let i=-2;i<=2;i++)box(panel,white,i*.153,0,.04,.003,.58,.004);for(let i=-1;i<=1;i++)box(panel,white,0,i*.15,.04,.90,.003,.004);for(const side of [-1,1])box(g,metal,x+side*.35,.30,z-.07,.035,.60,.035);return panel;}
 function tank(x,r=.19,h=1.2){cylinder(g,white,x,h/2,0,r,r,h);ellipsoid(g,white,x,h,0,r,r*.65,r);cylinder(g,metal,x,h+.12,0,.04,.04,.10);box(g,dark,x,h*.55,.195,r*1.5,.09,.015);}
 function turbine(x,z,scale=1){const t=joint(g,x,0,z);t.scale.setScalar(scale);cylinder(t,white,0,.72,0,.026,.07,1.44);const rotor=joint(t,0,1.48,.06);ellipsoid(rotor,metal,0,0,0,.075,.075,.10);for(let i=0;i<3;i++){const blade=joint(rotor,0,0,0);blade.rotation.z=i*TAU/3;const b=box(blade,white,0,.28,0,.053,.50,.015);b.rotation.z=-.14;}animated.rotor=rotor;}
 switch(n){
 case 12:{ // Recognizable service EV, disconnected charging pedestal and diagnostics.
  g.position.x=.65;g.rotation.y=-.30;
  box(g,white,.33,.40,0,1.6,.31,.68);ellipsoid(g,white,.33,.51,0,.82,.23,.35);
  box(g,blue,.35,.68,-.015,.80,.26,.57);box(g,white,.35,.835,-.015,.78,.035,.57);
  for(const x of [-.20,.88])for(const z of [-.35,.35]){const wheel=cylinder(g,black,x,.23,z,.18,.18,.09);wheel.rotation.x=Math.PI/2;const hub=cylinder(g,metal,x,.23,z*1.12,.09,.09,.02);hub.rotation.x=Math.PI/2;}
  for(const z of [-.23,.23])box(g,green,-.46,.46,z,.022,.055,.15);
  const hood=joint(g,-.38,.58,0);box(hood,white,.23,0,0,.47,.035,.61);hood.rotation.z=.45;
  box(g,dark,-.15,.56,0,.36,.035,.49);
  const charger=joint(g,1.35,0,-.45);box(charger,dark,0,.63,0,.28,1.26,.24);screen(charger,0,.94,.13,.20,.25);box(charger,green,0,1.22,.13,.17,.015,.014);
  tube(charger,[[.15,.8,0],[.34,.60,.02],[.34,.2,.02],[.16,.18,.02],[.14,.68,.04]],.013,black);
  break;}
 case 10:pv(.1,0);pv(.75,-.65);g.rotation.y=-.2;break;
 case 3:case 1:case 8:case 15:case 16:{cabinet(0,.55,n===15?1.35:1.2);if(n===15){cabinet(.62,.55,1.35);cabinet(1.24,.55,1.35);for(let i=0;i<4;i++)box(g,green,.62,.45+i*.12,.25,.035,.04,.008);}
  if(n===3){for(const x of [-.18,0,.18]){cylinder(g,metal,x,1.36,0,.032,.032,.30);for(let k=0;k<3;k++)cylinder(g,white,x,1.28+k*.065,0,.047,.047,.018);}}
  if(n===8){box(g,gold,.19,.59,.28,.06,.09,.025);box(g,white,-.14,.40,.245,.1,.13,.005);}
  if(n===16){const r=joint(g,.98,.1,0);cylinder(r,metal,0,.10,0,.24,.28,.20);const base=joint(r,0,.26,0);const a=box(base,gold,0,.28,0,.14,.55,.15);const elbow=joint(base,0,.54,0);cylinder(elbow,metal,0,0,0,.10,.10,.19).rotation.x=Math.PI/2;box(elbow,gold,0,.24,0,.11,.48,.12);const wrist=joint(elbow,0,.48,0);box(wrist,metal,0,.07,0,.10,.14,.10);for(const side of [-1,1])box(wrist,dark,side*.07,.13,0,.025,.15,.07);base.rotation.z=-.40;elbow.rotation.z=-.8;animated.robot={base,elbow};
   for(const x of [.55,1.40])box(g,metal,x,.32,.5,.025,.64,.025);box(g,metal,.98,.62,.5,.9,.02,.02);}
 break;}
 case 6:case 5:case 9:case 11:{box(g,dark,.3,.73,0,1.25,.06,.55);for(const x of [-.25,.8])box(g,metal,x,.36,0,.045,.72,.045);screen(g,.1,1.12,-.03,.6,.36);box(g,metal,.1,.85,-.05,.04,.20,.04);box(g,black,.1,.78,.16,.43,.015,.14);if(n===6){cabinet(1.15,.40,1.0);}if(n===9){cylinder(g,metal,.75,.91,.01,.13,.13,.28).rotation.z=Math.PI/2;}break;}
 case 7:turbine(.15,0);pv(.98,-.10);break;
 case 14:tank(0);tank(.48);tank(.96);tube(g,[[0,1.30,0],[0,1.5,0],[.96,1.5,0],[.96,1.30,0]],.023,metal);break;
 case 13:tank(.13,.32,.9);tank(.87,.23,1.2);tube(g,[[.13,.9,0],[.13,1.3,0],[.87,1.3,0]],.035,metal);break;
 case 2:{box(g,dark,.37,.12,0,1.2,.24,.6);const motor=cylinder(g,metal,.25,.47,0,.25,.25,.65);motor.rotation.z=Math.PI/2;for(let i=0;i<7;i++){const fin=cylinder(g,dark,-.01+i*.085,.47,0,.28,.28,.012);fin.rotation.z=Math.PI/2;}cylinder(g,gold,.73,.47,0,.06,.06,.35).rotation.z=Math.PI/2;break;}
 case 4:{const tower=joint(g,.42,0,-.05);for(const side of [-1,1]){const pole=box(tower,metal,side*.21,.90,0,.025,1.8,.025);pole.rotation.z=side*.18;}for(let i=0;i<7;i++){const bar=box(tower,metal,0,.2+i*.22,0,.43-i*.035,.018,.025);bar.rotation.z=(i%2?1:-1)*.40;}for(const y of [1.10,1.45]){box(tower,metal,0,y,0,.95,.035,.04);for(const side of [-1,1]){cylinder(tower,white,side*.39,y-.12,0,.035,.035,.20);tube(tower,[[side*.39,y-.22,0],[side*.85,y-.35,-.5],[side*1.1,y-.26,-1]],.006,dark);}}break;}
 }
 return animated;
}
export function buildCareerScene(id){
 const root=new THREE.Group();const floor=material(0x13251e,.35,.53),rim=material(0x6a8270,.6,.35);
 cylinder(root,floor,0,-.075,0,2.08,2.12,.13);
 const ring=mesh(root,new THREE.TorusGeometry(2.06,.012,8,100),rim,0,-.002,0);ring.rotation.x=Math.PI/2;
 const human=makeHuman(root,id),props=makeWorld(root,id);
 function pose(t){
  const p=t*TAU/8,n=human.number;
  human.body.rotation.z=.012*Math.sin(p);human.body.scale.y=1+.006*Math.sin(p*2);
  human.head.rotation.y=.12*Math.sin(p)+(n===3?.25:0);
  human.head.rotation.x=.045*Math.sin(p*2)+(n===10?.12:.02);
  const blink=(Math.abs((t%4)-3.5)<.065)?.12:1;human.eyes.forEach(e=>e.scale.y=blink);
  human.arms[0].elbow.rotation.x=-1.12+.055*Math.sin(p);
  const right=human.arms[1];
  if(n===10){right.shoulder.rotation.x=-.55+.12*Math.sin(p);right.elbow.rotation.x=-.35+.18*Math.sin(p);right.shoulder.rotation.z=-.36;}
  else if(n===3){right.shoulder.rotation.x=-1.10+.06*Math.sin(p);right.elbow.rotation.x=-.65+.08*Math.sin(p);}
  else if(n===15||n===16){right.shoulder.rotation.x=-1.0+.10*Math.sin(p);right.shoulder.rotation.z=-.40;right.elbow.rotation.x=-.20+.20*Math.sin(p);}
  else{right.shoulder.rotation.x=-.55+.14*Math.sin(p);right.elbow.rotation.x=-.80+.20*Math.sin(p*2);right.shoulder.rotation.z=-.1+.08*Math.sin(p);}
  if(props.rotor)props.rotor.rotation.z=t*.45;
  if(props.robot){props.robot.base.rotation.z=-.40+.16*Math.sin(p);props.robot.elbow.rotation.z=-.8+.28*Math.sin(p+.4);}
 }
 // Sample original joint poses into clips and use the same mixer/crossfade
 // mechanism as the official animation-blending example.
 const animatedNodes=[human.root,human.body,human.head,...human.eyes,...human.arms.flatMap(a=>[a.shoulder,a.elbow]),...human.legs.flatMap(l=>[l.hip,l.knee])];
 const rest=animatedNodes.map(o=>({position:o.position.clone(),quaternion:o.quaternion.clone(),scale:o.scale.clone()}));
 function restore(){animatedNodes.forEach((o,i)=>{o.position.copy(rest[i].position);o.quaternion.copy(rest[i].quaternion);o.scale.copy(rest[i].scale);});}
 function sampleMode(mode,t){
  restore(); pose(t);
  if(mode==='walk'){
   const a=t*TAU/1.4;
   human.root.position.y=.012*Math.cos(a*2);human.body.rotation.x=0;human.body.rotation.z=.025*Math.sin(a);human.body.scale.y=1;
   human.legs.forEach((leg,i)=>{const q=a+i*Math.PI;leg.hip.rotation.x=.42*Math.sin(q);leg.knee.rotation.x=Math.max(0,-Math.sin(q))*.85;});
   human.arms.forEach((arm,i)=>{arm.shoulder.rotation.x=-.32*Math.sin(a+i*Math.PI);arm.shoulder.rotation.z=(i?1:-1)*.07;arm.elbow.rotation.x=-.15;});
  }else if(mode==='idle'){
   human.root.position.y=0;human.body.rotation.x=0;
   human.legs.forEach(l=>{l.hip.rotation.x=0;l.knee.rotation.x=0;});
   human.arms[1].shoulder.rotation.x=-.08;human.arms[1].elbow.rotation.x=-.08;
  }
 }
 const clips={};
 for(const mode of ['work','walk','idle']){
  const duration=mode==='walk'?1.4:8,times=[],samples=animatedNodes.map(()=>({p:[],q:[],s:[]}));
  for(let i=0;i<=120;i++){const t=i/120*duration;times.push(t);sampleMode(mode,t);animatedNodes.forEach((o,k)=>{o.position.toArray(samples[k].p,samples[k].p.length);o.quaternion.toArray(samples[k].q,samples[k].q.length);o.scale.toArray(samples[k].s,samples[k].s.length);});}
  const tracks=[];animatedNodes.forEach((o,k)=>{tracks.push(new THREE.VectorKeyframeTrack(o.uuid+'.position',times,samples[k].p),new THREE.QuaternionKeyframeTrack(o.uuid+'.quaternion',times,samples[k].q),new THREE.VectorKeyframeTrack(o.uuid+'.scale',times,samples[k].s));});
  clips[mode]=new THREE.AnimationClip(mode,duration,tracks);
 }
 restore();pose(0);
 const mixer=new THREE.AnimationMixer(root),actions=Object.fromEntries(Object.entries(clips).map(([mode,clip])=>[mode,mixer.clipAction(clip)]));
 let active=actions.work;active.play();
 return {root,human,props,mixer,actions,pose,
  setMode(mode){const next=actions[mode];if(!next||next===active)return;next.reset().setEffectiveTimeScale(1).setEffectiveWeight(1).play();active.crossFadeTo(next,.4,false);active=next;},
  update(dt,t){mixer.update(dt);if(props.rotor)props.rotor.rotation.z=t*.45;if(props.robot){props.robot.base.rotation.z=-.4+.16*Math.sin(t*TAU/8);props.robot.elbow.rotation.z=-.8+.28*Math.sin(t*TAU/8+.4);}},
  dispose(){mixer.stopAllAction();mixer.uncacheRoot(root);}
 };
}
function disposeObject(root){const geometries=new Set(),materials=new Set();root.traverse(o=>{if(o.geometry)geometries.add(o.geometry);if(o.material)(Array.isArray(o.material)?o.material:[o.material]).forEach(m=>materials.add(m));});geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());}
export function createCareerRenderer(host,onFailure){
 const renderer=new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5));renderer.shadowMap.enabled=true;renderer.shadowMap.type=THREE.PCFSoftShadowMap;
 renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.35;
 const canvas=renderer.domElement;canvas.className='career-webgl';canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Karakter profesi 3D');
 const scene=new THREE.Scene();const camera=new THREE.PerspectiveCamera(33,1,.1,30);camera.position.set(3.1,2.15,6.1);camera.lookAt(.15,.82,0);
 scene.add(new THREE.HemisphereLight(0xe0efe3,0x203b2c,2.2));
 const key=new THREE.DirectionalLight(0xffe4bc,3.5);key.position.set(-2,5,4);key.castShadow=true;key.shadow.mapSize.set(1024,1024);key.shadow.camera.left=-3;key.shadow.camera.right=3;key.shadow.camera.top=3;key.shadow.camera.bottom=-3;key.shadow.normalBias=.025;scene.add(key);
 const rim=new THREE.DirectionalLight(0x93cbe8,2.7);rim.position.set(3,3,-3);scene.add(rim);
 let current=null,running=false,raf=0,previous=0,time=0,lastDraw=0,failed=false;
 function draw(){if(failed||!current)return;try{renderer.render(scene,camera);}catch(e){failed=true;setRunning(false);onFailure?.(e);}}
 function resize(){const w=host.clientWidth,h=host.clientHeight;if(!w||!h)return;renderer.setSize(w,h,false);camera.aspect=w/h;camera.position.set(w/h<1.3?3.7:3.1,2.15,w/h<1.3?8.2:6.1);camera.updateProjectionMatrix();draw();}
 function frame(now){if(!running)return;raf=requestAnimationFrame(frame);if(now-lastDraw<32)return;const dt=Math.min((now-(previous||now))/1000,.05);time+=dt;previous=now;lastDraw=now;current?.update(dt,time);draw();}
 function setRunning(value){running=!!value&&!failed;if(!running){cancelAnimationFrame(raf);raf=0;previous=0;draw();}else if(!raf){previous=0;raf=requestAnimationFrame(frame);}}
 const observer=new ResizeObserver(resize);observer.observe(host);
 canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();failed=true;setRunning(false);onFailure?.(new Error('WebGL context lost'));});
 return {
  select(id){if(current){scene.remove(current.root);current.dispose();disposeObject(current.root);}current=buildCareerScene(id);scene.add(current.root);time=0;host.append(canvas);resize();draw();},
  setRunning,
  setMode(mode){current?.setMode(mode);draw();},
  dispose(){setRunning(false);observer.disconnect();if(current)disposeObject(current.root);renderer.dispose();canvas.remove();}
 };
}
