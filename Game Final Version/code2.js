gdjs.Untitled_32scene3Code = {};
gdjs.Untitled_32scene3Code.localVariables = [];
gdjs.Untitled_32scene3Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene3Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene3Code.GDNewText2Objects1= [];
gdjs.Untitled_32scene3Code.GDNewText2Objects2= [];
gdjs.Untitled_32scene3Code.GDGreenButtonObjects1= [];
gdjs.Untitled_32scene3Code.GDGreenButtonObjects2= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1= [];
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2= [];


gdjs.Untitled_32scene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32scene3Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene3Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene3Code.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene3Code.GDGreenButtonObjects1[k] = gdjs.Untitled_32scene3Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene3Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene4", false);
}}

}


};

gdjs.Untitled_32scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene3Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDGreenButtonObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;

gdjs.Untitled_32scene3Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene3Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene3Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDGreenButtonObjects2.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Untitled_32scene3Code.GDNewSpriteObjects2.length = 0;


return;

}

gdjs['Untitled_32scene3Code'] = gdjs.Untitled_32scene3Code;
