# 正方形

## 创建正方形实例

`正方形`是基本的几何形状，GeoLib使得创建正方形对象并进行计算变得简单。注意：`#`符号后的文本只是`注释`，用于帮助您，因此不是原始代码的一部分。

```python
from geolib import Square

# 创建一个边长为5单位的正方形
square = Square(5)

# 打印正方形的属性
print(square)  # 输出: Square(side_length=5)
```

### 正方形：面积和周长
创建正方形实例后，您可以轻松计算其面积和周长。

```python
# 计算正方形的面积和周长
print("Square Area:", square.area)  # 输出: Square Area: 25

print("Square Perimeter:", square.perimeter)  # 输出: Square Perimeter: 20

```

### 正方形：缩放
GeoLib还允许您通过因子对正方形进行缩放：

```python
# 将正方形按因子2进行缩放
square.scale(2)

print("New Side Length:", square.side_length)  # 输出: New Side Length: 10

```

## 创建三角形实例
GeoLib支持三角形，提供了如使用海龙公式计算面积和检查三角形是否为直角三角形等功能。首先让我们看看如何创建三角形实例：

```python
from geolib import Triangle

# 创建一个边长为3、4和5单位的三角形
triangle = Triangle(3, 4, 5)

# 打印三角形的属性
print(triangle)  # 输出: Triangle(a=3, b=4, c=5)

```

### 三角形：面积和周长
创建三角形实例后，您可以计算其面积和周长。

```python
# 计算三角形的面积和周长
print("Triangle Area:", triangle.area)  # 输出: Triangle Area: 6.0

print("Triangle Perimeter:", triangle.perimeter)  # 输出: Triangle Perimeter: 12

```

### 三角形：是否为直角三角形？
GeoLib包括一个方法来检查三角形是否为直角三角形：

```python
# 检查三角形是否为直角三角形
print("Is the triangle right-angled?", triangle.is_right_angle())  # 输出: True

```

## 比较形状
此库允许您轻松比较形状。 您可以根据面积或边长比较两个正方形或两个三角形：

```python 
# 比较正方形
square1 = Square(4)
square2 = Square(6)

print(square1 == square2)  # 输出: False
print(square1 < square2)   # 输出: True

# 比较三角形
triangle1 = Triangle(3, 4, 5)
triangle2 = Triangle(5, 5, 8)

print(triangle1 == triangle2)  # 输出: False
print(triangle1 < triangle2)   # 输出: True

```

> 就这些！(暂时 :))