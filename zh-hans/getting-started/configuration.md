# Kareler

## Kare Örnekleri Oluşturma

`Kareler` temel geometrik şekillerdir ve GeoLib, kare nesneleri oluşturmayı ve hesaplamalar yapmayı kolaylaştırır. Not: `#` işaretinden sonraki metinler sadece size yardımcı olmak için `yorumlar`dır ve bu nedenle orijinal kodun bir parçası değillerdir.

```python
from geolib import Square

# Kenar uzunluğu 5 birim olan bir kare oluşturun
square = Square(5)

# Karenin özelliklerini yazdırın
print(square)  # Çıktı: Square(side_length=5)
```

### Kareler: alan ve çevre
Bir Kare örneği oluşturduktan sonra, kolayca `alan` ve `çevre` hesaplayabilirsiniz:

```python
# Karenin alanını ve çevresini hesaplayın
print("Kare Alanı:", square.area)  # Çıktı: Kare Alanı: 25

print("Kare Çevresi:", square.perimeter)  # Çıktı: Kare Çevresi: 20

```

### Kareler: ölçekleme
GeoLib ayrıca kareyi bir `faktör` ile `ölçekleme` yapmanıza olanak tanır:

```python
# Kareyi 2 faktörü ile ölçeklendirin
square.scale(2)

print("Yeni Kenar Uzunluğu:", square.side_length)  # Çıktı: Yeni Kenar Uzunluğu: 10


```

### Üçgen Örnekleri Oluşturma

GeoLib, `üçgenleri` destekler ve alan hesaplaması gibi özellikler sunar, ayrıca üçgenin `dik üçgen` olup olmadığını kontrol eder. Önce bir üçgen örneği nasıl oluşturulacağını görelim:

```python
from geolib import Triangle

# Kenar uzunlukları 3, 4 ve 5 birim olan bir üçgen oluşturun
triangle = Triangle(3, 4, 5)

# Üçgenin özelliklerini yazdırın
print(triangle)  # Çıktı: Triangle(a=3, b=4, c=5)

```
### Üçgenler: alan ve çevre
Bir Üçgen örneği oluşturduktan sonra, alan ve çevre hesaplamalarına geçebilirsiniz.

```python
# Üçgenin alanını ve çevresini hesaplayın
print("Üçgen Alanı:", triangle.area)  # Çıktı: Üçgen Alanı: 6.0

print("Üçgen Çevresi:", triangle.perimeter)  # Çıktı: Üçgen Çevresi: 12

```

### Üçgenler: dik üçgen mi?
GeoLib, bir üçgenin dik üçgen olup olmadığını kontrol etmek için bir yöntem içerir:

```python
# Üçgenin dik üçgen olup olmadığını kontrol edin
print("Üçgen dik üçgen mi?", triangle.is_right_angle())  # Çıktı: True

```

## Şekilleri Karşılaştırma
Bu kütüphane, şekilleri kolayca `karşılaştırmanıza` olanak tanır. İki kareyi veya iki üçgeni alanlarına veya `kenar uzunluklarına göre` karşılaştırabilirsiniz:

```python

# Kareleri karşılaştırma
square1 = Square(4)
square2 = Square(6)

print(square1 == square2)  # Çıktı: False
print(square1 < square2)   # Çıktı: True

# Üçgenleri karşılaştırma
triangle1 = Triangle(3, 4, 5)
triangle2 = Triangle(5, 5, 8)

print(triangle1 == triangle2)  # Çıktı: False
print(triangle1 < triangle2)   # Çıktı: True


```

> Bu kadar! (şimdilik :))