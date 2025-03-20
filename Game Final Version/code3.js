gdjs.Untitled_32scene4Code = {};
gdjs.Untitled_32scene4Code.localVariables = [];
gdjs.Untitled_32scene4Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene4Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene4Code.GDNewText2Objects1= [];
gdjs.Untitled_32scene4Code.GDNewText2Objects2= [];
gdjs.Untitled_32scene4Code.GDNewText3Objects1= [];
gdjs.Untitled_32scene4Code.GDNewText3Objects2= [];
gdjs.Untitled_32scene4Code.GDNewText4Objects1= [];
gdjs.Untitled_32scene4Code.GDNewText4Objects2= [];
gdjs.Untitled_32scene4Code.GDNewText5Objects1= [];
gdjs.Untitled_32scene4Code.GDNewText5Objects2= [];
gdjs.Untitled_32scene4Code.GDSummerBackgroundObjects1= [];
gdjs.Untitled_32scene4Code.GDSummerBackgroundObjects2= [];
gdjs.Untitled_32scene4Code.GDGreenButtonObjects1= [];
gdjs.Untitled_32scene4Code.GDGreenButtonObjects2= [];
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2= [];


gdjs.Untitled_32scene4Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32scene4Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene4Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene4Code.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene4Code.GDGreenButtonObjects1[k] = gdjs.Untitled_32scene4Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene4Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene5", false);
}}

}


};

gdjs.Untitled_32scene4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene4Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText3Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText3Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText4Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText4Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText5Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText5Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDSummerBackgroundObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDSummerBackgroundObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDGreenButtonObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32scene4Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene4Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText3Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText3Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText4Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText4Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewText5Objects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewText5Objects2.length = 0;
gdjs.Untitled_32scene4Code.GDSummerBackgroundObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDSummerBackgroundObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDGreenButtonObjects2.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene4Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Untitled_32scene4Code'] = gdjs.Untitled_32scene4Code;
