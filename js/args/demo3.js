// 给参数赋予默认值 容错性提升
function information({name='没有留下', age=0, height=174}) {
    console.log(name, age,height);
}  
information({});