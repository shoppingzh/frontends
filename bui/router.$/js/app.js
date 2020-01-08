function printPageInfo(){
    console.log('==================== 当前模块信息 START ======================');
    console.log('main: ');
    console.log(router.$("main"));
    console.log('current module: ');
    console.log(router.currentModule());
    console.log('==================== 当前模块信息 END ======================');
}