gdjs.WhyCode = {};
gdjs.WhyCode.localVariables = [];
gdjs.WhyCode.GDLogoObjects1= [];
gdjs.WhyCode.GDLogoObjects2= [];
gdjs.WhyCode.GDLogoObjects3= [];
gdjs.WhyCode.GDInfoUnderLogoObjects1= [];
gdjs.WhyCode.GDInfoUnderLogoObjects2= [];
gdjs.WhyCode.GDInfoUnderLogoObjects3= [];
gdjs.WhyCode.GDTopObjects1= [];
gdjs.WhyCode.GDTopObjects2= [];
gdjs.WhyCode.GDTopObjects3= [];
gdjs.WhyCode.GDPortativeObjects1= [];
gdjs.WhyCode.GDPortativeObjects2= [];
gdjs.WhyCode.GDPortativeObjects3= [];
gdjs.WhyCode.GDStartGalleryObjects1= [];
gdjs.WhyCode.GDStartGalleryObjects2= [];
gdjs.WhyCode.GDStartGalleryObjects3= [];
gdjs.WhyCode.GDHomeButtonObjects1= [];
gdjs.WhyCode.GDHomeButtonObjects2= [];
gdjs.WhyCode.GDHomeButtonObjects3= [];
gdjs.WhyCode.GDModelsButtonObjects1= [];
gdjs.WhyCode.GDModelsButtonObjects2= [];
gdjs.WhyCode.GDModelsButtonObjects3= [];
gdjs.WhyCode.GDAboutButtonObjects1= [];
gdjs.WhyCode.GDAboutButtonObjects2= [];
gdjs.WhyCode.GDAboutButtonObjects3= [];
gdjs.WhyCode.GDWhyContainersButtonObjects1= [];
gdjs.WhyCode.GDWhyContainersButtonObjects2= [];
gdjs.WhyCode.GDWhyContainersButtonObjects3= [];
gdjs.WhyCode.GDWhatsappObjects1= [];
gdjs.WhyCode.GDWhatsappObjects2= [];
gdjs.WhyCode.GDWhatsappObjects3= [];
gdjs.WhyCode.GDTelegramObjects1= [];
gdjs.WhyCode.GDTelegramObjects2= [];
gdjs.WhyCode.GDTelegramObjects3= [];
gdjs.WhyCode.GDVkObjects1= [];
gdjs.WhyCode.GDVkObjects2= [];
gdjs.WhyCode.GDVkObjects3= [];
gdjs.WhyCode.GDLikeObjects1= [];
gdjs.WhyCode.GDLikeObjects2= [];
gdjs.WhyCode.GDLikeObjects3= [];
gdjs.WhyCode.GDGalleryObjects1= [];
gdjs.WhyCode.GDGalleryObjects2= [];
gdjs.WhyCode.GDGalleryObjects3= [];
gdjs.WhyCode.GDPortativeDescObjects1= [];
gdjs.WhyCode.GDPortativeDescObjects2= [];
gdjs.WhyCode.GDPortativeDescObjects3= [];
gdjs.WhyCode.GDEcologyObjects1= [];
gdjs.WhyCode.GDEcologyObjects2= [];
gdjs.WhyCode.GDEcologyObjects3= [];
gdjs.WhyCode.GDEcologyDescObjects1= [];
gdjs.WhyCode.GDEcologyDescObjects2= [];
gdjs.WhyCode.GDEcologyDescObjects3= [];
gdjs.WhyCode.GDPngDescObjects1= [];
gdjs.WhyCode.GDPngDescObjects2= [];
gdjs.WhyCode.GDPngDescObjects3= [];


gdjs.WhyCode.userFunc0xb845f8 = function GDJSInlineCode(runtimeScene) {
"use strict";
document.addEventListener('contextmenu', (event) => {
    event.preventDefault();
});

};
gdjs.WhyCode.userFunc0xb846b0 = function GDJSInlineCode(runtimeScene) {
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
gdjs.WhyCode.eventsList0 = function(runtimeScene) {

{


gdjs.WhyCode.userFunc0xb845f8(runtimeScene);

}


{


gdjs.WhyCode.userFunc0xb846b0(runtimeScene);

}


};gdjs.WhyCode.eventsList1 = function(runtimeScene) {

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
isConditionTrue_0 = gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) <= 1280;
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraY(runtimeScene, gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0) + (150), "", 0);
}}

}


};gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDHomeButtonObjects2Objects = Hashtable.newFrom({"HomeButton": gdjs.WhyCode.GDHomeButtonObjects2});
gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDAboutButtonObjects2Objects = Hashtable.newFrom({"AboutButton": gdjs.WhyCode.GDAboutButtonObjects2});
gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDModelsButtonObjects2Objects = Hashtable.newFrom({"ModelsButton": gdjs.WhyCode.GDModelsButtonObjects2});
gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDTelegramObjects2Objects = Hashtable.newFrom({"Telegram": gdjs.WhyCode.GDTelegramObjects2});
gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDWhatsappObjects1Objects = Hashtable.newFrom({"Whatsapp": gdjs.WhyCode.GDWhatsappObjects1});
gdjs.WhyCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.WhyCode.GDHomeButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDHomeButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AboutButton"), gdjs.WhyCode.GDAboutButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDAboutButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("ModelsButton"), gdjs.WhyCode.GDModelsButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDModelsButtonObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Main", false);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(true);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Telegram"), gdjs.WhyCode.GDTelegramObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDTelegramObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.openURL("https://web.telegram.org/k/#@Art_Sistem", runtimeScene);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Whatsapp"), gdjs.WhyCode.GDWhatsappObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDWhatsappObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
}

}


};gdjs.WhyCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.WhyCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDHomeButtonObjects2ObjectsGDgdjs_9546WhyCode_9546GDAboutButtonObjects2ObjectsGDgdjs_9546WhyCode_9546GDWhyContainersButtonObjects2ObjectsGDgdjs_9546WhyCode_9546GDModelsButtonObjects2Objects = Hashtable.newFrom({"HomeButton": gdjs.WhyCode.GDHomeButtonObjects2, "AboutButton": gdjs.WhyCode.GDAboutButtonObjects2, "WhyContainersButton": gdjs.WhyCode.GDWhyContainersButtonObjects2, "ModelsButton": gdjs.WhyCode.GDModelsButtonObjects2});
gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDHomeButtonObjects1ObjectsGDgdjs_9546WhyCode_9546GDAboutButtonObjects1ObjectsGDgdjs_9546WhyCode_9546GDWhyContainersButtonObjects1ObjectsGDgdjs_9546WhyCode_9546GDModelsButtonObjects1Objects = Hashtable.newFrom({"HomeButton": gdjs.WhyCode.GDHomeButtonObjects1, "AboutButton": gdjs.WhyCode.GDAboutButtonObjects1, "WhyContainersButton": gdjs.WhyCode.GDWhyContainersButtonObjects1, "ModelsButton": gdjs.WhyCode.GDModelsButtonObjects1});
gdjs.WhyCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("AboutButton"), gdjs.WhyCode.GDAboutButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.WhyCode.GDHomeButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("ModelsButton"), gdjs.WhyCode.GDModelsButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("WhyContainersButton"), gdjs.WhyCode.GDWhyContainersButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDHomeButtonObjects2ObjectsGDgdjs_9546WhyCode_9546GDAboutButtonObjects2ObjectsGDgdjs_9546WhyCode_9546GDWhyContainersButtonObjects2ObjectsGDgdjs_9546WhyCode_9546GDModelsButtonObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.WhyCode.GDAboutButtonObjects2 */
/* Reuse gdjs.WhyCode.GDHomeButtonObjects2 */
/* Reuse gdjs.WhyCode.GDModelsButtonObjects2 */
/* Reuse gdjs.WhyCode.GDWhyContainersButtonObjects2 */
{for(var i = 0, len = gdjs.WhyCode.GDHomeButtonObjects2.length ;i < len;++i) {
    gdjs.WhyCode.GDHomeButtonObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.WhyCode.GDAboutButtonObjects2.length ;i < len;++i) {
    gdjs.WhyCode.GDAboutButtonObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.WhyCode.GDWhyContainersButtonObjects2.length ;i < len;++i) {
    gdjs.WhyCode.GDWhyContainersButtonObjects2[i].setColor("255;255;255");
}
for(var i = 0, len = gdjs.WhyCode.GDModelsButtonObjects2.length ;i < len;++i) {
    gdjs.WhyCode.GDModelsButtonObjects2[i].setColor("255;255;255");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("AboutButton"), gdjs.WhyCode.GDAboutButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("HomeButton"), gdjs.WhyCode.GDHomeButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("ModelsButton"), gdjs.WhyCode.GDModelsButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("WhyContainersButton"), gdjs.WhyCode.GDWhyContainersButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.WhyCode.mapOfGDgdjs_9546WhyCode_9546GDHomeButtonObjects1ObjectsGDgdjs_9546WhyCode_9546GDAboutButtonObjects1ObjectsGDgdjs_9546WhyCode_9546GDWhyContainersButtonObjects1ObjectsGDgdjs_9546WhyCode_9546GDModelsButtonObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.WhyCode.GDAboutButtonObjects1 */
/* Reuse gdjs.WhyCode.GDHomeButtonObjects1 */
/* Reuse gdjs.WhyCode.GDModelsButtonObjects1 */
/* Reuse gdjs.WhyCode.GDWhyContainersButtonObjects1 */
{for(var i = 0, len = gdjs.WhyCode.GDHomeButtonObjects1.length ;i < len;++i) {
    gdjs.WhyCode.GDHomeButtonObjects1[i].setColor("216;196;127");
}
for(var i = 0, len = gdjs.WhyCode.GDAboutButtonObjects1.length ;i < len;++i) {
    gdjs.WhyCode.GDAboutButtonObjects1[i].setColor("216;196;127");
}
for(var i = 0, len = gdjs.WhyCode.GDWhyContainersButtonObjects1.length ;i < len;++i) {
    gdjs.WhyCode.GDWhyContainersButtonObjects1[i].setColor("216;196;127");
}
for(var i = 0, len = gdjs.WhyCode.GDModelsButtonObjects1.length ;i < len;++i) {
    gdjs.WhyCode.GDModelsButtonObjects1[i].setColor("216;196;127");
}
}}

}


};gdjs.WhyCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("PngDesc"), gdjs.WhyCode.GDPngDescObjects1);
{for(var i = 0, len = gdjs.WhyCode.GDPngDescObjects1.length ;i < len;++i) {
    gdjs.WhyCode.GDPngDescObjects1[i].getBehavior("Animation").setAnimationName(gdjs.WhyCode.GDPngDescObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}
{ //Subevents
gdjs.WhyCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


gdjs.WhyCode.eventsList1(runtimeScene);
}


{


gdjs.WhyCode.eventsList3(runtimeScene);
}


{


gdjs.WhyCode.eventsList4(runtimeScene);
}


};

gdjs.WhyCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.WhyCode.GDLogoObjects1.length = 0;
gdjs.WhyCode.GDLogoObjects2.length = 0;
gdjs.WhyCode.GDLogoObjects3.length = 0;
gdjs.WhyCode.GDInfoUnderLogoObjects1.length = 0;
gdjs.WhyCode.GDInfoUnderLogoObjects2.length = 0;
gdjs.WhyCode.GDInfoUnderLogoObjects3.length = 0;
gdjs.WhyCode.GDTopObjects1.length = 0;
gdjs.WhyCode.GDTopObjects2.length = 0;
gdjs.WhyCode.GDTopObjects3.length = 0;
gdjs.WhyCode.GDPortativeObjects1.length = 0;
gdjs.WhyCode.GDPortativeObjects2.length = 0;
gdjs.WhyCode.GDPortativeObjects3.length = 0;
gdjs.WhyCode.GDStartGalleryObjects1.length = 0;
gdjs.WhyCode.GDStartGalleryObjects2.length = 0;
gdjs.WhyCode.GDStartGalleryObjects3.length = 0;
gdjs.WhyCode.GDHomeButtonObjects1.length = 0;
gdjs.WhyCode.GDHomeButtonObjects2.length = 0;
gdjs.WhyCode.GDHomeButtonObjects3.length = 0;
gdjs.WhyCode.GDModelsButtonObjects1.length = 0;
gdjs.WhyCode.GDModelsButtonObjects2.length = 0;
gdjs.WhyCode.GDModelsButtonObjects3.length = 0;
gdjs.WhyCode.GDAboutButtonObjects1.length = 0;
gdjs.WhyCode.GDAboutButtonObjects2.length = 0;
gdjs.WhyCode.GDAboutButtonObjects3.length = 0;
gdjs.WhyCode.GDWhyContainersButtonObjects1.length = 0;
gdjs.WhyCode.GDWhyContainersButtonObjects2.length = 0;
gdjs.WhyCode.GDWhyContainersButtonObjects3.length = 0;
gdjs.WhyCode.GDWhatsappObjects1.length = 0;
gdjs.WhyCode.GDWhatsappObjects2.length = 0;
gdjs.WhyCode.GDWhatsappObjects3.length = 0;
gdjs.WhyCode.GDTelegramObjects1.length = 0;
gdjs.WhyCode.GDTelegramObjects2.length = 0;
gdjs.WhyCode.GDTelegramObjects3.length = 0;
gdjs.WhyCode.GDVkObjects1.length = 0;
gdjs.WhyCode.GDVkObjects2.length = 0;
gdjs.WhyCode.GDVkObjects3.length = 0;
gdjs.WhyCode.GDLikeObjects1.length = 0;
gdjs.WhyCode.GDLikeObjects2.length = 0;
gdjs.WhyCode.GDLikeObjects3.length = 0;
gdjs.WhyCode.GDGalleryObjects1.length = 0;
gdjs.WhyCode.GDGalleryObjects2.length = 0;
gdjs.WhyCode.GDGalleryObjects3.length = 0;
gdjs.WhyCode.GDPortativeDescObjects1.length = 0;
gdjs.WhyCode.GDPortativeDescObjects2.length = 0;
gdjs.WhyCode.GDPortativeDescObjects3.length = 0;
gdjs.WhyCode.GDEcologyObjects1.length = 0;
gdjs.WhyCode.GDEcologyObjects2.length = 0;
gdjs.WhyCode.GDEcologyObjects3.length = 0;
gdjs.WhyCode.GDEcologyDescObjects1.length = 0;
gdjs.WhyCode.GDEcologyDescObjects2.length = 0;
gdjs.WhyCode.GDEcologyDescObjects3.length = 0;
gdjs.WhyCode.GDPngDescObjects1.length = 0;
gdjs.WhyCode.GDPngDescObjects2.length = 0;
gdjs.WhyCode.GDPngDescObjects3.length = 0;

gdjs.WhyCode.eventsList5(runtimeScene);
gdjs.WhyCode.GDLogoObjects1.length = 0;
gdjs.WhyCode.GDLogoObjects2.length = 0;
gdjs.WhyCode.GDLogoObjects3.length = 0;
gdjs.WhyCode.GDInfoUnderLogoObjects1.length = 0;
gdjs.WhyCode.GDInfoUnderLogoObjects2.length = 0;
gdjs.WhyCode.GDInfoUnderLogoObjects3.length = 0;
gdjs.WhyCode.GDTopObjects1.length = 0;
gdjs.WhyCode.GDTopObjects2.length = 0;
gdjs.WhyCode.GDTopObjects3.length = 0;
gdjs.WhyCode.GDPortativeObjects1.length = 0;
gdjs.WhyCode.GDPortativeObjects2.length = 0;
gdjs.WhyCode.GDPortativeObjects3.length = 0;
gdjs.WhyCode.GDStartGalleryObjects1.length = 0;
gdjs.WhyCode.GDStartGalleryObjects2.length = 0;
gdjs.WhyCode.GDStartGalleryObjects3.length = 0;
gdjs.WhyCode.GDHomeButtonObjects1.length = 0;
gdjs.WhyCode.GDHomeButtonObjects2.length = 0;
gdjs.WhyCode.GDHomeButtonObjects3.length = 0;
gdjs.WhyCode.GDModelsButtonObjects1.length = 0;
gdjs.WhyCode.GDModelsButtonObjects2.length = 0;
gdjs.WhyCode.GDModelsButtonObjects3.length = 0;
gdjs.WhyCode.GDAboutButtonObjects1.length = 0;
gdjs.WhyCode.GDAboutButtonObjects2.length = 0;
gdjs.WhyCode.GDAboutButtonObjects3.length = 0;
gdjs.WhyCode.GDWhyContainersButtonObjects1.length = 0;
gdjs.WhyCode.GDWhyContainersButtonObjects2.length = 0;
gdjs.WhyCode.GDWhyContainersButtonObjects3.length = 0;
gdjs.WhyCode.GDWhatsappObjects1.length = 0;
gdjs.WhyCode.GDWhatsappObjects2.length = 0;
gdjs.WhyCode.GDWhatsappObjects3.length = 0;
gdjs.WhyCode.GDTelegramObjects1.length = 0;
gdjs.WhyCode.GDTelegramObjects2.length = 0;
gdjs.WhyCode.GDTelegramObjects3.length = 0;
gdjs.WhyCode.GDVkObjects1.length = 0;
gdjs.WhyCode.GDVkObjects2.length = 0;
gdjs.WhyCode.GDVkObjects3.length = 0;
gdjs.WhyCode.GDLikeObjects1.length = 0;
gdjs.WhyCode.GDLikeObjects2.length = 0;
gdjs.WhyCode.GDLikeObjects3.length = 0;
gdjs.WhyCode.GDGalleryObjects1.length = 0;
gdjs.WhyCode.GDGalleryObjects2.length = 0;
gdjs.WhyCode.GDGalleryObjects3.length = 0;
gdjs.WhyCode.GDPortativeDescObjects1.length = 0;
gdjs.WhyCode.GDPortativeDescObjects2.length = 0;
gdjs.WhyCode.GDPortativeDescObjects3.length = 0;
gdjs.WhyCode.GDEcologyObjects1.length = 0;
gdjs.WhyCode.GDEcologyObjects2.length = 0;
gdjs.WhyCode.GDEcologyObjects3.length = 0;
gdjs.WhyCode.GDEcologyDescObjects1.length = 0;
gdjs.WhyCode.GDEcologyDescObjects2.length = 0;
gdjs.WhyCode.GDEcologyDescObjects3.length = 0;
gdjs.WhyCode.GDPngDescObjects1.length = 0;
gdjs.WhyCode.GDPngDescObjects2.length = 0;
gdjs.WhyCode.GDPngDescObjects3.length = 0;


return;

}

gdjs['WhyCode'] = gdjs.WhyCode;
