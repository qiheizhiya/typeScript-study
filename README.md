# 泛型

有时，书写某个函数时，会丢失一些类型信息（多个位置的类型应该保持一致或有关联的信息）

泛型：是指附属于函数、类、接口、类型别名之上的类型

泛型相当于时一个类型变量，在定义时，无法预先知道具体的类型，可以用该变量来代替

很多时候，TS会智能的根据传递的参数，推导出泛型的具体类型

如果无法完成推导，并且又没有传递具体的类型，默认为空对象

# 在函数中使用泛型

在函数名上写上```<泛型名称>```

# 如何在类型别名、接口、类中使用泛型

直接在名称后写上```<泛型名称>```

# 泛型约束

泛型约束，用于现实泛型的取值

# 多泛型

# 开发一个字典类