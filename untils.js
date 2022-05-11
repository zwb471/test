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
    if (index == -1) {
        return false
    }
    return true
}
