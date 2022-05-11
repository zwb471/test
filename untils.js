export function checkArray(key) {
    //权限数组
    let arr1 = ['1','3','4'] //后台返回的权限数组

    //当前用户权限
    // let arr2 = ['1','3','4']

    //判断当前用户权限是否在权限数组中
    let index = arr1.findIndex(item => {
        return item == key
    });
    // let index = arr1.findIndex(item => {
    //     return item == key
    // }) //如果在返回索引值，如果不在返回-1
    //557777
    //5587778888888888888
    console.log('git4')
    console.log('/master 我是冲突一行')
    console.log('git4') //合并成功 hot-fix
    console.log('hot -fix -- dev') //合并成功 hot-fix
    //5587778888888888888
    if (index == -1) {
        return false
    }
    return true
}
console.log('push - commit-git5') //ffff
console.log(666666)