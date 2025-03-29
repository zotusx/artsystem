gdjs.ModelCode = {};
gdjs.ModelCode.localVariables = [];
gdjs.ModelCode.GDLogoObjects1= [];
gdjs.ModelCode.GDLogoObjects2= [];
gdjs.ModelCode.GDLogoObjects3= [];
gdjs.ModelCode.GDInfoUnderLogoObjects1= [];
gdjs.ModelCode.GDInfoUnderLogoObjects2= [];
gdjs.ModelCode.GDInfoUnderLogoObjects3= [];
gdjs.ModelCode.GDTopObjects1= [];
gdjs.ModelCode.GDTopObjects2= [];
gdjs.ModelCode.GDTopObjects3= [];
gdjs.ModelCode.GDSpeedObjects1= [];
gdjs.ModelCode.GDSpeedObjects2= [];
gdjs.ModelCode.GDSpeedObjects3= [];
gdjs.ModelCode.GDStartGalleryObjects1= [];
gdjs.ModelCode.GDStartGalleryObjects2= [];
gdjs.ModelCode.GDStartGalleryObjects3= [];
gdjs.ModelCode.GDHomeButtonObjects1= [];
gdjs.ModelCode.GDHomeButtonObjects2= [];
gdjs.ModelCode.GDHomeButtonObjects3= [];
gdjs.ModelCode.GDModelsButtonObjects1= [];
gdjs.ModelCode.GDModelsButtonObjects2= [];
gdjs.ModelCode.GDModelsButtonObjects3= [];
gdjs.ModelCode.GDAboutButtonObjects1= [];
gdjs.ModelCode.GDAboutButtonObjects2= [];
gdjs.ModelCode.GDAboutButtonObjects3= [];
gdjs.ModelCode.GDWhyContainersButtonObjects1= [];
gdjs.ModelCode.GDWhyContainersButtonObjects2= [];
gdjs.ModelCode.GDWhyContainersButtonObjects3= [];
gdjs.ModelCode.GDWhatsappObjects1= [];
gdjs.ModelCode.GDWhatsappObjects2= [];
gdjs.ModelCode.GDWhatsappObjects3= [];
gdjs.ModelCode.GDTelegramObjects1= [];
gdjs.ModelCode.GDTelegramObjects2= [];
gdjs.ModelCode.GDTelegramObjects3= [];
gdjs.ModelCode.GDVkObjects1= [];
gdjs.ModelCode.GDVkObjects2= [];
gdjs.ModelCode.GDVkObjects3= [];
gdjs.ModelCode.GDLikeObjects1= [];
gdjs.ModelCode.GDLikeObjects2= [];
gdjs.ModelCode.GDLikeObjects3= [];
gdjs.ModelCode.GDGalleryObjects1= [];
gdjs.ModelCode.GDGalleryObjects2= [];
gdjs.ModelCode.GDGalleryObjects3= [];
gdjs.ModelCode.GDBannerObjects1= [];
gdjs.ModelCode.GDBannerObjects2= [];
gdjs.ModelCode.GDBannerObjects3= [];
gdjs.ModelCode.GDMObjects1= [];
gdjs.ModelCode.GDMObjects2= [];
gdjs.ModelCode.GDMObjects3= [];
gdjs.ModelCode.GDArrowObjects1= [];
gdjs.ModelCode.GDArrowObjects2= [];
gdjs.ModelCode.GDArrowObjects3= [];
gdjs.ModelCode.GDL1Objects1= [];
gdjs.ModelCode.GDL1Objects2= [];
gdjs.ModelCode.GDL1Objects3= [];
gdjs.ModelCode.GDL2Objects1= [];
gdjs.ModelCode.GDL2Objects2= [];
gdjs.ModelCode.GDL2Objects3= [];
gdjs.ModelCode.GDL3Objects1= [];
gdjs.ModelCode.GDL3Objects2= [];
gdjs.ModelCode.GDL3Objects3= [];
gdjs.ModelCode.GDXLObjects1= [];
gdjs.ModelCode.GDXLObjects2= [];
gdjs.ModelCode.GDXLObjects3= [];


gdjs.ModelCode.userFunc0x8cd048 = function GDJSInlineCode(runtimeScene) {
"use strict";
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

};
gdjs.ModelCode.userFunc0x8cd100 = function GDJSInlineCode(runtimeScene) {
"use strict";
document.addEventListener('touchstart', (e) => {
    e.preventDefault();
    if(e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT') {
        e.target.click();
    }
}, {
passive: false,
});
};
gdjs.ModelCode.eventsList0 = function(runtimeScene) {

{


gdjs.ModelCode.userFunc0x8cd048(runtimeScene);

}


{


gdjs.ModelCode.userFunc0x8cd100(runtimeScene);

}


};gdjs.ModelCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) >= 640;
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) - (150), "", 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) <= 2800;
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (150), "", 0);
}}

}


};gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDHomeButtonObjects2Objects = Hashtable.newFrom({"HomeButton": gdjs.ModelCode.GDHomeButtonObjects2});
gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDAboutButtonObjects2Objects = Hashtable.newFrom({"AboutButton": gdjs.ModelCode.GDAboutButtonObjects2});
gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDModelsButtonObjects2Objects = Hashtable.newFrom({"ModelsButton": gdjs.ModelCode.GDModelsButtonObjects2});
gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDTelegramObjects2Objects = Hashtable.newFrom({"Telegram": gdjs.ModelCode.GDTelegramObjects2});
gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDVkObjects1Objects = Hashtable.newFrom({"Vk": gdjs.ModelCode.GDVkObjects1});
gdjs.ModelCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.ModelCode.GDHomeButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDHomeButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AboutButton"), gdjs.ModelCode.GDAboutButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDAboutButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ModelsButton"), gdjs.ModelCode.GDModelsButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDModelsButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Telegram"), gdjs.ModelCode.GDTelegramObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDTelegramObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://web.telegram.org/k/#@Art_System", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Vk"), gdjs.ModelCode.GDVkObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDVkObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
}

}


};gdjs.ModelCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.ModelCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDHomeButtonObjects2ObjectsGDgdjs_9546ModelCode_9546GDAboutButtonObjects2ObjectsGDgdjs_9546ModelCode_9546GDWhyContainersButtonObjects2ObjectsGDgdjs_9546ModelCode_9546GDModelsButtonObjects2Objects = Hashtable.newFrom({"HomeButton": gdjs.ModelCode.GDHomeButtonObjects2, "AboutButton": gdjs.ModelCode.GDAboutButtonObjects2, "WhyContainersButton": gdjs.ModelCode.GDWhyContainersButtonObjects2, "ModelsButton": gdjs.ModelCode.GDModelsButtonObjects2});
gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDHomeButtonObjects1ObjectsGDgdjs_9546ModelCode_9546GDAboutButtonObjects1ObjectsGDgdjs_9546ModelCode_9546GDWhyContainersButtonObjects1ObjectsGDgdjs_9546ModelCode_9546GDModelsButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.ModelCode.GDHomeButtonObjects1, "AboutButton": gdjs.ModelCode.GDAboutButtonObjects1, "WhyContainersButton": gdjs.ModelCode.GDWhyContainersButtonObjects1, "ModelsButton": gdjs.ModelCode.GDModelsButtonObjects1});
gdjs.ModelCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AboutButton"), gdjs.ModelCode.GDAboutButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.ModelCode.GDHomeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ModelsButton"), gdjs.ModelCode.GDModelsButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhyContainersButton"), gdjs.ModelCode.GDWhyContainersButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDHomeButtonObjects2ObjectsGDgdjs_9546ModelCode_9546GDAboutButtonObjects2ObjectsGDgdjs_9546ModelCode_9546GDWhyContainersButtonObjects2ObjectsGDgdjs_9546ModelCode_9546GDModelsButtonObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDAboutButtonObjects2 */
/* Reuse gdjs.ModelCode.GDHomeButtonObjects2 */
/* Reuse gdjs.ModelCode.GDModelsButtonObjects2 */
/* Reuse gdjs.ModelCode.GDWhyContainersButtonObjects2 */
{for(var i = 0, len = gdjs.ModelCode.GDHomeButtonObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDHomeButtonObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.ModelCode.GDAboutButtonObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDAboutButtonObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.ModelCode.GDWhyContainersButtonObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDWhyContainersButtonObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.ModelCode.GDModelsButtonObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDModelsButtonObjects2[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AboutButton"), gdjs.ModelCode.GDAboutButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.ModelCode.GDHomeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ModelsButton"), gdjs.ModelCode.GDModelsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhyContainersButton"), gdjs.ModelCode.GDWhyContainersButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDHomeButtonObjects1ObjectsGDgdjs_9546ModelCode_9546GDAboutButtonObjects1ObjectsGDgdjs_9546ModelCode_9546GDWhyContainersButtonObjects1ObjectsGDgdjs_9546ModelCode_9546GDModelsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDAboutButtonObjects1 */
/* Reuse gdjs.ModelCode.GDHomeButtonObjects1 */
/* Reuse gdjs.ModelCode.GDModelsButtonObjects1 */
/* Reuse gdjs.ModelCode.GDWhyContainersButtonObjects1 */
{for(var i = 0, len = gdjs.ModelCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDHomeButtonObjects1[i].setColor("216;196;127");
}
for(var i = 0, len = gdjs.ModelCode.GDAboutButtonObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDAboutButtonObjects1[i].setColor("216;196;127");
}
for(var i = 0, len = gdjs.ModelCode.GDWhyContainersButtonObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDWhyContainersButtonObjects1[i].setColor("216;196;127");
}
for(var i = 0, len = gdjs.ModelCode.GDModelsButtonObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDModelsButtonObjects1[i].setColor("216;196;127");
}
}}

}


};gdjs.ModelCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ModelCode.GDXLObjects1, gdjs.ModelCode.GDXLObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDXLObjects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDXLObjects2[i].getVariableNumber(gdjs.ModelCode.GDXLObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDXLObjects2[k] = gdjs.ModelCode.GDXLObjects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDXLObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDXLObjects2 */
{for(var i = 0, len = gdjs.ModelCode.GDXLObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDXLObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects2[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


{

gdjs.copyArray(gdjs.ModelCode.GDXLObjects1, gdjs.ModelCode.GDXLObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDXLObjects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDXLObjects2[i].getVariableNumber(gdjs.ModelCode.GDXLObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDXLObjects2[k] = gdjs.ModelCode.GDXLObjects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDXLObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDXLObjects2 */
{for(var i = 0, len = gdjs.ModelCode.GDXLObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.ModelCode.GDXLObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects2[i].getBehavior("Resizable").setSize(800, 533);
}
}}

}


{

/* Reuse gdjs.ModelCode.GDXLObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDXLObjects1.length;i<l;++i) {
    if ( gdjs.ModelCode.GDXLObjects1[i].getVariableNumber(gdjs.ModelCode.GDXLObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDXLObjects1[k] = gdjs.ModelCode.GDXLObjects1[i];
        ++k;
    }
}
gdjs.ModelCode.GDXLObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDXLObjects1 */
{for(var i = 0, len = gdjs.ModelCode.GDXLObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDXLObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects1[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


};gdjs.ModelCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "XL");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("L1"), gdjs.ModelCode.GDL1Objects1);
gdjs.copyArray(runtimeScene.getObjects("L2"), gdjs.ModelCode.GDL2Objects1);
gdjs.copyArray(runtimeScene.getObjects("L3"), gdjs.ModelCode.GDL3Objects1);
gdjs.copyArray(runtimeScene.getObjects("M"), gdjs.ModelCode.GDMObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.ModelCode.GDSpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("XL"), gdjs.ModelCode.GDXLObjects1);
{for(var i = 0, len = gdjs.ModelCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDSpeedObjects1[i].getBehavior("Text").setText("Модель XL состоит из двух контейнеров по 40 футов и площадь 56 м2. Данная модель состоит из 2 спален, ванной комнаты, кухни, столовой и большой гостиной. Ванная комната полностью оборудована. В обеих спальнях установлены кровати. Сочетание современного и индустриального дизайна, а также концепция «открытого пространства» позволят вам в полной мере насладиться жизнью независимо от того, находитесь ли вы в городе или в другом месте.");
}
}{for(var i = 0, len = gdjs.ModelCode.GDMObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL1Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL2Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDXLObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL3Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects1[i].hide();
}
}
{ //Subevents
gdjs.ModelCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.ModelCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ModelCode.GDL3Objects1, gdjs.ModelCode.GDL3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL3Objects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL3Objects2[i].getVariableNumber(gdjs.ModelCode.GDL3Objects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL3Objects2[k] = gdjs.ModelCode.GDL3Objects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDL3Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL3Objects2 */
{for(var i = 0, len = gdjs.ModelCode.GDL3Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL3Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects2[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


{

gdjs.copyArray(gdjs.ModelCode.GDL3Objects1, gdjs.ModelCode.GDL3Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL3Objects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL3Objects2[i].getVariableNumber(gdjs.ModelCode.GDL3Objects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL3Objects2[k] = gdjs.ModelCode.GDL3Objects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDL3Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL3Objects2 */
{for(var i = 0, len = gdjs.ModelCode.GDL3Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.ModelCode.GDL3Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects2[i].getBehavior("Resizable").setSize(800, 533);
}
}}

}


{

/* Reuse gdjs.ModelCode.GDL3Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL3Objects1.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL3Objects1[i].getVariableNumber(gdjs.ModelCode.GDL3Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL3Objects1[k] = gdjs.ModelCode.GDL3Objects1[i];
        ++k;
    }
}
gdjs.ModelCode.GDL3Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL3Objects1 */
{for(var i = 0, len = gdjs.ModelCode.GDL3Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL3Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects1[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


};gdjs.ModelCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "L3");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("L1"), gdjs.ModelCode.GDL1Objects1);
gdjs.copyArray(runtimeScene.getObjects("L2"), gdjs.ModelCode.GDL2Objects1);
gdjs.copyArray(runtimeScene.getObjects("L3"), gdjs.ModelCode.GDL3Objects1);
gdjs.copyArray(runtimeScene.getObjects("M"), gdjs.ModelCode.GDMObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.ModelCode.GDSpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("XL"), gdjs.ModelCode.GDXLObjects1);
{for(var i = 0, len = gdjs.ModelCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDSpeedObjects1[i].getBehavior("Text").setText("Модель L3 изготовлена ​​из нового 40-футового транспортного контейнера. По площади это соответствует однокомнатной квартире. Состоит из спальни, гостиной, кухни, столовой и ванной комнаты. Сбоку имеются большие раздвижные двери, еще одна раздвижная дверь расположена спереди. Модель L3 подойдет вам, если вы хотите инвестировать в недвижимость, дома в горах и загородные дома.");
}
}{for(var i = 0, len = gdjs.ModelCode.GDMObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL1Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL2Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL3Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ModelCode.GDXLObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects1[i].hide();
}
}
{ //Subevents
gdjs.ModelCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.ModelCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ModelCode.GDL2Objects1, gdjs.ModelCode.GDL2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL2Objects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL2Objects2[i].getVariableNumber(gdjs.ModelCode.GDL2Objects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL2Objects2[k] = gdjs.ModelCode.GDL2Objects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDL2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL2Objects2 */
{for(var i = 0, len = gdjs.ModelCode.GDL2Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL2Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects2[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


{

gdjs.copyArray(gdjs.ModelCode.GDL2Objects1, gdjs.ModelCode.GDL2Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL2Objects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL2Objects2[i].getVariableNumber(gdjs.ModelCode.GDL2Objects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL2Objects2[k] = gdjs.ModelCode.GDL2Objects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDL2Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL2Objects2 */
{for(var i = 0, len = gdjs.ModelCode.GDL2Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.ModelCode.GDL2Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects2[i].getBehavior("Resizable").setSize(800, 533);
}
}}

}


{

/* Reuse gdjs.ModelCode.GDL2Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL2Objects1.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL2Objects1[i].getVariableNumber(gdjs.ModelCode.GDL2Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL2Objects1[k] = gdjs.ModelCode.GDL2Objects1[i];
        ++k;
    }
}
gdjs.ModelCode.GDL2Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL2Objects1 */
{for(var i = 0, len = gdjs.ModelCode.GDL2Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL2Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects1[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


};gdjs.ModelCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "L2");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("L1"), gdjs.ModelCode.GDL1Objects1);
gdjs.copyArray(runtimeScene.getObjects("L2"), gdjs.ModelCode.GDL2Objects1);
gdjs.copyArray(runtimeScene.getObjects("L3"), gdjs.ModelCode.GDL3Objects1);
gdjs.copyArray(runtimeScene.getObjects("M"), gdjs.ModelCode.GDMObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.ModelCode.GDSpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("XL"), gdjs.ModelCode.GDXLObjects1);
{for(var i = 0, len = gdjs.ModelCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDSpeedObjects1[i].getBehavior("Text").setText("Модель L2 изготовлена ​​из 40-футового транспортного контейнера.\nДанная модель соответствует размерам однокомнатной квартиры. Состоит из спальни, гостиной, кухни, столовой и ванной комнаты. В этой модели входная дверь расположена спереди, а сзади имеются большие раздвижные двери, выходящие во двор. Модель L2 подойдет, если вы хотите инвестировать в недвижимость, дома в горах, коттеджи.");
}
}{for(var i = 0, len = gdjs.ModelCode.GDMObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL1Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL2Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL3Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDXLObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects1[i].hide();
}
}
{ //Subevents
gdjs.ModelCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.ModelCode.eventsList11 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ModelCode.GDL1Objects1, gdjs.ModelCode.GDL1Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL1Objects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL1Objects2[i].getVariableNumber(gdjs.ModelCode.GDL1Objects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL1Objects2[k] = gdjs.ModelCode.GDL1Objects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDL1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL1Objects2 */
{for(var i = 0, len = gdjs.ModelCode.GDL1Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL1Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects2[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


{

gdjs.copyArray(gdjs.ModelCode.GDL1Objects1, gdjs.ModelCode.GDL1Objects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL1Objects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL1Objects2[i].getVariableNumber(gdjs.ModelCode.GDL1Objects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL1Objects2[k] = gdjs.ModelCode.GDL1Objects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDL1Objects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL1Objects2 */
{for(var i = 0, len = gdjs.ModelCode.GDL1Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.ModelCode.GDL1Objects2.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects2[i].getBehavior("Resizable").setSize(800, 533);
}
}}

}


{

/* Reuse gdjs.ModelCode.GDL1Objects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDL1Objects1.length;i<l;++i) {
    if ( gdjs.ModelCode.GDL1Objects1[i].getVariableNumber(gdjs.ModelCode.GDL1Objects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDL1Objects1[k] = gdjs.ModelCode.GDL1Objects1[i];
        ++k;
    }
}
gdjs.ModelCode.GDL1Objects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDL1Objects1 */
{for(var i = 0, len = gdjs.ModelCode.GDL1Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL1Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects1[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


};gdjs.ModelCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "L1");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("L1"), gdjs.ModelCode.GDL1Objects1);
gdjs.copyArray(runtimeScene.getObjects("L2"), gdjs.ModelCode.GDL2Objects1);
gdjs.copyArray(runtimeScene.getObjects("L3"), gdjs.ModelCode.GDL3Objects1);
gdjs.copyArray(runtimeScene.getObjects("M"), gdjs.ModelCode.GDMObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.ModelCode.GDSpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("XL"), gdjs.ModelCode.GDXLObjects1);
{for(var i = 0, len = gdjs.ModelCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDSpeedObjects1[i].getBehavior("Text").setText("Модель L1 изготовлена ​​из 40-футового контейнера. По площади это соответствует однокомнатной квартире. Состоит из спальни, гостиной, кухни, столовой и ванной комнаты. Сбоку имеются большие раздвижные двери с панорамным видом/выходом во двор. Модель L1 подойдет, если вы хотите инвестировать в недвижимость, дома в горах, коттеджи.");
}
}{for(var i = 0, len = gdjs.ModelCode.GDMObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL1Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL2Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL3Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDXLObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects1[i].hide();
}
}
{ //Subevents
gdjs.ModelCode.eventsList11(runtimeScene);} //End of subevents
}

}


};gdjs.ModelCode.eventsList13 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ModelCode.GDMObjects1, gdjs.ModelCode.GDMObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDMObjects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDMObjects2[i].getVariableNumber(gdjs.ModelCode.GDMObjects2[i].getVariables().getFromIndex(0)) == 2 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDMObjects2[k] = gdjs.ModelCode.GDMObjects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDMObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDMObjects2 */
{for(var i = 0, len = gdjs.ModelCode.GDMObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() + 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDMObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects2[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


{

gdjs.copyArray(gdjs.ModelCode.GDMObjects1, gdjs.ModelCode.GDMObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDMObjects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDMObjects2[i].getVariableNumber(gdjs.ModelCode.GDMObjects2[i].getVariables().getFromIndex(0)) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDMObjects2[k] = gdjs.ModelCode.GDMObjects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDMObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDMObjects2 */
{for(var i = 0, len = gdjs.ModelCode.GDMObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects2[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber());
}
}{for(var i = 0, len = gdjs.ModelCode.GDMObjects2.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects2[i].getBehavior("Resizable").setSize(800, 533);
}
}}

}


{

/* Reuse gdjs.ModelCode.GDMObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDMObjects1.length;i<l;++i) {
    if ( gdjs.ModelCode.GDMObjects1[i].getVariableNumber(gdjs.ModelCode.GDMObjects1[i].getVariables().getFromIndex(0)) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDMObjects1[k] = gdjs.ModelCode.GDMObjects1[i];
        ++k;
    }
}
gdjs.ModelCode.GDMObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.ModelCode.GDMObjects1 */
{for(var i = 0, len = gdjs.ModelCode.GDMObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects1[i].getBehavior("Animation").setAnimationIndex(runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() - 1);
}
}{for(var i = 0, len = gdjs.ModelCode.GDMObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects1[i].getBehavior("Resizable").setSize(400, 290);
}
}}

}


};gdjs.ModelCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() == "M");
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("L1"), gdjs.ModelCode.GDL1Objects1);
gdjs.copyArray(runtimeScene.getObjects("L2"), gdjs.ModelCode.GDL2Objects1);
gdjs.copyArray(runtimeScene.getObjects("L3"), gdjs.ModelCode.GDL3Objects1);
gdjs.copyArray(runtimeScene.getObjects("M"), gdjs.ModelCode.GDMObjects1);
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.ModelCode.GDSpeedObjects1);
gdjs.copyArray(runtimeScene.getObjects("XL"), gdjs.ModelCode.GDXLObjects1);
{for(var i = 0, len = gdjs.ModelCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDSpeedObjects1[i].getBehavior("Text").setText("Модель М изготовлена ​​из 20-футового транспортного контейнера. Состоит из гостиной, кухни, столовой и ванной комнаты. Соответствует размеру квартиры-студии. Вы также можете создать этнодеревню с несколькими такими единицами. Данная модель подойдет, если вы хотите инвестировать в недвижимость. Другие варианты включают музыкальную студию, художественную студию, кафе, магазин, офис: Возможности безграничны. ");
}
}{for(var i = 0, len = gdjs.ModelCode.GDMObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDMObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.ModelCode.GDL1Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL1Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL2Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL2Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDL3Objects1.length ;i < len;++i) {
    gdjs.ModelCode.GDL3Objects1[i].hide();
}
}{for(var i = 0, len = gdjs.ModelCode.GDXLObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDXLObjects1[i].hide();
}
}
{ //Subevents
gdjs.ModelCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDArrowObjects1Objects = Hashtable.newFrom({"Arrow": gdjs.ModelCode.GDArrowObjects1});
gdjs.ModelCode.eventsList15 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.ModelCode.GDArrowObjects1, gdjs.ModelCode.GDArrowObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDArrowObjects2.length;i<l;++i) {
    if ( gdjs.ModelCode.GDArrowObjects2[i].getX() == 1259 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDArrowObjects2[k] = gdjs.ModelCode.GDArrowObjects2[i];
        ++k;
    }
}
gdjs.ModelCode.GDArrowObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() <= 5);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).add(1);
}}

}


{

/* Reuse gdjs.ModelCode.GDArrowObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.ModelCode.GDArrowObjects1.length;i<l;++i) {
    if ( gdjs.ModelCode.GDArrowObjects1[i].getX() == 580 ) {
        isConditionTrue_0 = true;
        gdjs.ModelCode.GDArrowObjects1[k] = gdjs.ModelCode.GDArrowObjects1[i];
        ++k;
    }
}
gdjs.ModelCode.GDArrowObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() >= 1);
}
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).sub(1);
}}

}


};gdjs.ModelCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.ModelCode.eventsList15(runtimeScene);} //End of subevents
}

}


};gdjs.ModelCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Gallery"), gdjs.ModelCode.GDGalleryObjects1);
{for(var i = 0, len = gdjs.ModelCode.GDGalleryObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDGalleryObjects1[i].getBehavior("Text").setText("Модель " + runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{ //Subevents
gdjs.ModelCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.ModelCode.eventsList1(runtimeScene);
}


{


gdjs.ModelCode.eventsList3(runtimeScene);
}


{


gdjs.ModelCode.eventsList4(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() != "M");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(2).getAsString() != "L1");
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Speed"), gdjs.ModelCode.GDSpeedObjects1);
{for(var i = 0, len = gdjs.ModelCode.GDSpeedObjects1.length ;i < len;++i) {
    gdjs.ModelCode.GDSpeedObjects1[i].getBehavior("Text").setText(" ");
}
}}

}


{


gdjs.ModelCode.eventsList6(runtimeScene);
}


{


gdjs.ModelCode.eventsList8(runtimeScene);
}


{


gdjs.ModelCode.eventsList10(runtimeScene);
}


{


gdjs.ModelCode.eventsList12(runtimeScene);
}


{


gdjs.ModelCode.eventsList14(runtimeScene);
}


{

gdjs.copyArray(runtimeScene.getObjects("Arrow"), gdjs.ModelCode.GDArrowObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.ModelCode.mapOfGDgdjs_9546ModelCode_9546GDArrowObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.ModelCode.eventsList16(runtimeScene);} //End of subevents
}

}


};

gdjs.ModelCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.ModelCode.GDLogoObjects1.length = 0;
gdjs.ModelCode.GDLogoObjects2.length = 0;
gdjs.ModelCode.GDLogoObjects3.length = 0;
gdjs.ModelCode.GDInfoUnderLogoObjects1.length = 0;
gdjs.ModelCode.GDInfoUnderLogoObjects2.length = 0;
gdjs.ModelCode.GDInfoUnderLogoObjects3.length = 0;
gdjs.ModelCode.GDTopObjects1.length = 0;
gdjs.ModelCode.GDTopObjects2.length = 0;
gdjs.ModelCode.GDTopObjects3.length = 0;
gdjs.ModelCode.GDSpeedObjects1.length = 0;
gdjs.ModelCode.GDSpeedObjects2.length = 0;
gdjs.ModelCode.GDSpeedObjects3.length = 0;
gdjs.ModelCode.GDStartGalleryObjects1.length = 0;
gdjs.ModelCode.GDStartGalleryObjects2.length = 0;
gdjs.ModelCode.GDStartGalleryObjects3.length = 0;
gdjs.ModelCode.GDHomeButtonObjects1.length = 0;
gdjs.ModelCode.GDHomeButtonObjects2.length = 0;
gdjs.ModelCode.GDHomeButtonObjects3.length = 0;
gdjs.ModelCode.GDModelsButtonObjects1.length = 0;
gdjs.ModelCode.GDModelsButtonObjects2.length = 0;
gdjs.ModelCode.GDModelsButtonObjects3.length = 0;
gdjs.ModelCode.GDAboutButtonObjects1.length = 0;
gdjs.ModelCode.GDAboutButtonObjects2.length = 0;
gdjs.ModelCode.GDAboutButtonObjects3.length = 0;
gdjs.ModelCode.GDWhyContainersButtonObjects1.length = 0;
gdjs.ModelCode.GDWhyContainersButtonObjects2.length = 0;
gdjs.ModelCode.GDWhyContainersButtonObjects3.length = 0;
gdjs.ModelCode.GDWhatsappObjects1.length = 0;
gdjs.ModelCode.GDWhatsappObjects2.length = 0;
gdjs.ModelCode.GDWhatsappObjects3.length = 0;
gdjs.ModelCode.GDTelegramObjects1.length = 0;
gdjs.ModelCode.GDTelegramObjects2.length = 0;
gdjs.ModelCode.GDTelegramObjects3.length = 0;
gdjs.ModelCode.GDVkObjects1.length = 0;
gdjs.ModelCode.GDVkObjects2.length = 0;
gdjs.ModelCode.GDVkObjects3.length = 0;
gdjs.ModelCode.GDLikeObjects1.length = 0;
gdjs.ModelCode.GDLikeObjects2.length = 0;
gdjs.ModelCode.GDLikeObjects3.length = 0;
gdjs.ModelCode.GDGalleryObjects1.length = 0;
gdjs.ModelCode.GDGalleryObjects2.length = 0;
gdjs.ModelCode.GDGalleryObjects3.length = 0;
gdjs.ModelCode.GDBannerObjects1.length = 0;
gdjs.ModelCode.GDBannerObjects2.length = 0;
gdjs.ModelCode.GDBannerObjects3.length = 0;
gdjs.ModelCode.GDMObjects1.length = 0;
gdjs.ModelCode.GDMObjects2.length = 0;
gdjs.ModelCode.GDMObjects3.length = 0;
gdjs.ModelCode.GDArrowObjects1.length = 0;
gdjs.ModelCode.GDArrowObjects2.length = 0;
gdjs.ModelCode.GDArrowObjects3.length = 0;
gdjs.ModelCode.GDL1Objects1.length = 0;
gdjs.ModelCode.GDL1Objects2.length = 0;
gdjs.ModelCode.GDL1Objects3.length = 0;
gdjs.ModelCode.GDL2Objects1.length = 0;
gdjs.ModelCode.GDL2Objects2.length = 0;
gdjs.ModelCode.GDL2Objects3.length = 0;
gdjs.ModelCode.GDL3Objects1.length = 0;
gdjs.ModelCode.GDL3Objects2.length = 0;
gdjs.ModelCode.GDL3Objects3.length = 0;
gdjs.ModelCode.GDXLObjects1.length = 0;
gdjs.ModelCode.GDXLObjects2.length = 0;
gdjs.ModelCode.GDXLObjects3.length = 0;

gdjs.ModelCode.eventsList17(runtimeScene);
gdjs.ModelCode.GDLogoObjects1.length = 0;
gdjs.ModelCode.GDLogoObjects2.length = 0;
gdjs.ModelCode.GDLogoObjects3.length = 0;
gdjs.ModelCode.GDInfoUnderLogoObjects1.length = 0;
gdjs.ModelCode.GDInfoUnderLogoObjects2.length = 0;
gdjs.ModelCode.GDInfoUnderLogoObjects3.length = 0;
gdjs.ModelCode.GDTopObjects1.length = 0;
gdjs.ModelCode.GDTopObjects2.length = 0;
gdjs.ModelCode.GDTopObjects3.length = 0;
gdjs.ModelCode.GDSpeedObjects1.length = 0;
gdjs.ModelCode.GDSpeedObjects2.length = 0;
gdjs.ModelCode.GDSpeedObjects3.length = 0;
gdjs.ModelCode.GDStartGalleryObjects1.length = 0;
gdjs.ModelCode.GDStartGalleryObjects2.length = 0;
gdjs.ModelCode.GDStartGalleryObjects3.length = 0;
gdjs.ModelCode.GDHomeButtonObjects1.length = 0;
gdjs.ModelCode.GDHomeButtonObjects2.length = 0;
gdjs.ModelCode.GDHomeButtonObjects3.length = 0;
gdjs.ModelCode.GDModelsButtonObjects1.length = 0;
gdjs.ModelCode.GDModelsButtonObjects2.length = 0;
gdjs.ModelCode.GDModelsButtonObjects3.length = 0;
gdjs.ModelCode.GDAboutButtonObjects1.length = 0;
gdjs.ModelCode.GDAboutButtonObjects2.length = 0;
gdjs.ModelCode.GDAboutButtonObjects3.length = 0;
gdjs.ModelCode.GDWhyContainersButtonObjects1.length = 0;
gdjs.ModelCode.GDWhyContainersButtonObjects2.length = 0;
gdjs.ModelCode.GDWhyContainersButtonObjects3.length = 0;
gdjs.ModelCode.GDWhatsappObjects1.length = 0;
gdjs.ModelCode.GDWhatsappObjects2.length = 0;
gdjs.ModelCode.GDWhatsappObjects3.length = 0;
gdjs.ModelCode.GDTelegramObjects1.length = 0;
gdjs.ModelCode.GDTelegramObjects2.length = 0;
gdjs.ModelCode.GDTelegramObjects3.length = 0;
gdjs.ModelCode.GDVkObjects1.length = 0;
gdjs.ModelCode.GDVkObjects2.length = 0;
gdjs.ModelCode.GDVkObjects3.length = 0;
gdjs.ModelCode.GDLikeObjects1.length = 0;
gdjs.ModelCode.GDLikeObjects2.length = 0;
gdjs.ModelCode.GDLikeObjects3.length = 0;
gdjs.ModelCode.GDGalleryObjects1.length = 0;
gdjs.ModelCode.GDGalleryObjects2.length = 0;
gdjs.ModelCode.GDGalleryObjects3.length = 0;
gdjs.ModelCode.GDBannerObjects1.length = 0;
gdjs.ModelCode.GDBannerObjects2.length = 0;
gdjs.ModelCode.GDBannerObjects3.length = 0;
gdjs.ModelCode.GDMObjects1.length = 0;
gdjs.ModelCode.GDMObjects2.length = 0;
gdjs.ModelCode.GDMObjects3.length = 0;
gdjs.ModelCode.GDArrowObjects1.length = 0;
gdjs.ModelCode.GDArrowObjects2.length = 0;
gdjs.ModelCode.GDArrowObjects3.length = 0;
gdjs.ModelCode.GDL1Objects1.length = 0;
gdjs.ModelCode.GDL1Objects2.length = 0;
gdjs.ModelCode.GDL1Objects3.length = 0;
gdjs.ModelCode.GDL2Objects1.length = 0;
gdjs.ModelCode.GDL2Objects2.length = 0;
gdjs.ModelCode.GDL2Objects3.length = 0;
gdjs.ModelCode.GDL3Objects1.length = 0;
gdjs.ModelCode.GDL3Objects2.length = 0;
gdjs.ModelCode.GDL3Objects3.length = 0;
gdjs.ModelCode.GDXLObjects1.length = 0;
gdjs.ModelCode.GDXLObjects2.length = 0;
gdjs.ModelCode.GDXLObjects3.length = 0;


return;

}

gdjs['ModelCode'] = gdjs.ModelCode;
