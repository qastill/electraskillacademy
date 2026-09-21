import assert from 'node:assert/strict';
import {buildCareerScene} from '../career-three.js';
for(let n=1;n<=16;n++){
 const s=buildCareerScene('S'+n);let meshes=0,bones=0;s.root.traverse(o=>{if(o.isMesh)meshes++;if(o.isBone)bones++;});assert(meshes>50);assert(bones>10);
 const start=s.human.arms[1].shoulder.quaternion.clone();s.update(.3,.3);assert(!start.equals(s.human.arms[1].shoulder.quaternion));
 s.setMode('walk');for(let i=0;i<20;i++)s.update(.04,i*.04);const knee=s.human.legs[0].knee.quaternion.clone();s.update(.15,1);assert(!knee.equals(s.human.legs[0].knee.quaternion));
 s.setMode('idle');s.update(.5,1.5);s.root.updateMatrixWorld(true);s.root.traverse(o=>{assert(o.matrixWorld.elements.every(Number.isFinite));});s.dispose();
 console.log('PASS S'+n+': '+meshes+' meshes, '+bones+' joints, work/walk/idle transitions');
}
