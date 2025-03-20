gdjs.Untitled_32scene5Code = {};
gdjs.Untitled_32scene5Code.localVariables = [];
gdjs.Untitled_32scene5Code.GDNewTiledSpriteObjects1= [];
gdjs.Untitled_32scene5Code.GDNewTiledSpriteObjects2= [];
gdjs.Untitled_32scene5Code.GDBottomArrowButtonObjects1= [];
gdjs.Untitled_32scene5Code.GDBottomArrowButtonObjects2= [];
gdjs.Untitled_32scene5Code.GDBottomArrowRoundButtonObjects1= [];
gdjs.Untitled_32scene5Code.GDBottomArrowRoundButtonObjects2= [];
gdjs.Untitled_32scene5Code.GDNewTextObjects1= [];
gdjs.Untitled_32scene5Code.GDNewTextObjects2= [];
gdjs.Untitled_32scene5Code.GDNewText2Objects1= [];
gdjs.Untitled_32scene5Code.GDNewText2Objects2= [];
gdjs.Untitled_32scene5Code.GDNewText3Objects1= [];
gdjs.Untitled_32scene5Code.GDNewText3Objects2= [];
gdjs.Untitled_32scene5Code.GDNewText4Objects1= [];
gdjs.Untitled_32scene5Code.GDNewText4Objects2= [];
gdjs.Untitled_32scene5Code.GDGreenFlatBarObjects1= [];
gdjs.Untitled_32scene5Code.GDGreenFlatBarObjects2= [];
gdjs.Untitled_32scene5Code.GDGreenButtonObjects1= [];
gdjs.Untitled_32scene5Code.GDGreenButtonObjects2= [];


gdjs.Untitled_32scene5Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("GreenButton"), gdjs.Untitled_32scene5Code.GDGreenButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Untitled_32scene5Code.GDGreenButtonObjects1.length;i<l;++i) {
    if ( gdjs.Untitled_32scene5Code.GDGreenButtonObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Untitled_32scene5Code.GDGreenButtonObjects1[k] = gdjs.Untitled_32scene5Code.GDGreenButtonObjects1[i];
        ++k;
    }
}
gdjs.Untitled_32scene5Code.GDGreenButtonObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Untitled scene6", false);
}}

}


};

gdjs.Untitled_32scene5Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Untitled_32scene5Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDBottomArrowButtonObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDBottomArrowButtonObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDBottomArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDBottomArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene5Code.GDNewText3Objects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewText3Objects2.length = 0;
gdjs.Untitled_32scene5Code.GDNewText4Objects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewText4Objects2.length = 0;
gdjs.Untitled_32scene5Code.GDGreenFlatBarObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDGreenFlatBarObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDGreenButtonObjects2.length = 0;

gdjs.Untitled_32scene5Code.eventsList0(runtimeScene);
gdjs.Untitled_32scene5Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDBottomArrowButtonObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDBottomArrowButtonObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDBottomArrowRoundButtonObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDBottomArrowRoundButtonObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDNewTextObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewTextObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDNewText2Objects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewText2Objects2.length = 0;
gdjs.Untitled_32scene5Code.GDNewText3Objects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewText3Objects2.length = 0;
gdjs.Untitled_32scene5Code.GDNewText4Objects1.length = 0;
gdjs.Untitled_32scene5Code.GDNewText4Objects2.length = 0;
gdjs.Untitled_32scene5Code.GDGreenFlatBarObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDGreenFlatBarObjects2.length = 0;
gdjs.Untitled_32scene5Code.GDGreenButtonObjects1.length = 0;
gdjs.Untitled_32scene5Code.GDGreenButtonObjects2.length = 0;


return;

}

gdjs['Untitled_32scene5Code'] = gdjs.Untitled_32scene5Code;
