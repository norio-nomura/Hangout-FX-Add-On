/*

 (The WTFPL)

 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 Version 2, December 2004

 Copyright (C) 2012 Norio Nomura

 Everyone is permitted to copy and distribute verbatim or modified
 copies of this license document, and changing it is allowed as long
 as the name is changed.

 DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE
 TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION

 0. You just DO WHAT THE FUCK YOU WANT TO.

 */

/*
 gapi.hangout.av.effects.FaceTrackingFeature = {
 LEFT_EYE: "left_eye_center"
 LEFT_EYEBROW_LEFT: "left_eyebrow_left"
 LEFT_EYEBROW_RIGHT: "left_eyebrow_right"
 LOWER_LIP: "lip_lower"
 MOUTH_CENTER: "mouth_center"
 MOUTH_LEFT: "mouth_left"
 MOUTH_RIGHT: "mouth_right"
 NOSE_ROOT: "nose_root"
 NOSE_TIP: "nose_tip"
 RIGHT_EYE: "right_eye_center"
 RIGHT_EYEBROW_LEFT: "right_eyebrow_left"
 RIGHT_EYEBROW_RIGHT: "right_eyebrow_right"
 UPPER_LIP: "lip_upper"
 };
 */

(function () {
  var e = gadgets.views.getParams();
  var appData = e['appData'] ? JSON.parse(e['appData']) : {objs:[]};
  if (!appData) {
    appData = {objs:[]};
  } else if (!'objs' in appData) {
    appData['objs'] = [];
  }
  appData.objs.push({
        t:'cat',
        id:'Hangout-FX-Add-On',
        name:'Hangout-FX-Add-On'
      }, {
        cat:'Hangout-FX-Add-On',
        t:'eff',
        name:'ano',
        //        icon: url + 'ano-icon.png',   // icon url
        icon:'https://raw.github.com/norio-nomura/Hangout-FX-Add-On/master/Hangout-FX-Add-On.safariextension/ano-icon.png',
        //        res: url + 'ano.png',   // icon url
        res:'https://raw.github.com/norio-nomura/Hangout-FX-Add-On/master/Hangout-FX-Add-On.safariextension/ano.png',
        excl:'face', // exclusionTags. overhead, forehead, halo-horns, accent, face, eye, left-eye, right-eye, moustache, beard
        tf:'', // trackingFeature. See gapi.hangout.av.effects.FaceTrackingFeature
        offx:0.0, // offset.x
        offy:0.0, // offset.y
        scale:0.7, // scale
        rot:0.0, // rotation
        swf:true, // scaleWithFace
        rwf:true, // rotateWithFace
        on:true    //
      }
  );

  e['appData'] = JSON.stringify(appData);

  gadgets.views.getParams = function () {
    return e;
  };
  addExtensionPack();
})();
