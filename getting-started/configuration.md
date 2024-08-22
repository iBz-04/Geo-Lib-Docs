# Squares

## Creating Square Instances

`Squares` are fundamental geometric shapes, and GeoLib makes it easy to create square objects and perform calculations. Note: texts after the `#` sign are just `comments` to help you, hence they're not part of the original code.

```python
from geolib import Square

#Create a square with a side length of 5 units
square = Square(5)

#Print the square's attributes
print(square)  # Output: Square(side_length=5)

```

### Squares: area & perimeter

Once you have created a Square instance, you can easily calculate its `area` and `perimeter`

```python
# Calculate the area and perimeter of the square
print("Square Area:", square.area)  # Output: Square Area: 25

print("Square Perimeter:", square.perimeter)  # Output: Square Perimeter: 20

```

### Squares: scaling

GeoLib also allows you to `scale` the square by a `factor` :

```python

# Scale the square by a factor of 2
square.scale(2)

print("New Side Length:", square.side_length)  # Output: New Side Length: 10

```


##  Creating Triangle Instances

GeoLib supports `triangles`, providing features like area calculation using `Heron’s formula` and checking if the triangle is `right-angled`.
first lets see how to create a triangle instance :

```python

from geolib import Triangle

# Create a triangle with side lengths of 3, 4, and 5 units
triangle = Triangle(3, 4, 5)

# Print the triangle's attributes
print(triangle)  # Output: Triangle(a=3, b=4, c=5)

```


### Triangles: area & perimeter

Once you have created a Triangle instance, you can proceed to calculate its `area` and `perimeter`

```python

# Calculate the area and perimeter of the triangle
print("Triangle Area:", triangle.area)  # Output: Triangle Area: 6.0

print("Triangle Perimeter:", triangle.perimeter)  # Output: Triangle Perimeter: 12

```
```

### Triangles: right-angled?

GeoLib includes a method to check if a triangle is right-angled :

```python
# Check if the triangle is a right-angled triangle
print("Is the triangle right-angled?", triangle.is_right_angle())  # Output: True

```

## Comparing Shapes

This library allows you to compare shapes easily. 
You can compare two squares or two triangles based on their area or side lengths :

```python

# Comparing squares
square1 = Square(4)
square2 = Square(6)

print(square1 == square2)  # Output: False
print(square1 < square2)   # Output: True

# Comparing triangles
triangle1 = Triangle(3, 4, 5)
triangle2 = Triangle(5, 5, 8)

print(triangle1 == triangle2)  # Output: False
print(triangle1 < triangle2)   # Output: True

```

> That's it! (for now :))