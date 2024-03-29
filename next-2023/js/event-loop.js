console.log(0);

Promise.resolve().then(() => { // 函数1
  console.log(1);
  Promise.resolve().then(() => { // 函数2
    console.log(2);
  })
  setTimeout(() => { // 函数3
    console.log(3);
  }, 0)
})

setTimeout(() => { // 函数4
  console.log(4);
}, 0)

/**
 * 
 * 第一轮：执行全局代码，函数1、函数4加入任务队列，输出0，目前宏任务队列：[4]，微任务队列：[1]
 * 第二轮：执行函数1，函数2、函数3加入任务队列，输出1，目前宏任务队列：[4,3]，微任务队列：[2]
 * 第三轮：执行函数2，输出3，目前宏任务队列：[4,3]，微任务队列：[]
 * 第四轮：执行函数4，输出4，目前宏任务队列：[3]，微任务队列：[]
 * 第五轮：执行函数3，输出3
 * 
 */
