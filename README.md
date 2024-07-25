# MapList
A much faster alternative to filter with similar API


# Purpose
complexity of list.filter(...) is O(N). As the list grows, ther performance deteriorates. Fetching items from Map is fast as the complexity is O(1) but they don't have the convience of methods like filter, find and map.
This library provides a way to convert a list to mapped list such that it is very fast like Map and has all utility methods.


# Usage

## CreateFrom
Convert a list/array of itemes as mapped list
```
const map = MapList.createFrom(dataFromSomeAPI);
```
Or, you can initialize
```
const map = new Map<number,string>([[1,"A"],[2,"B"]])
```
You can have objects too instead of this.

## findAll
Finds all elements for specified IDs. You can also specify the property to be used as ID.
```
const mapSearchByKeys = map.findAll([101,103])
```


## find
Finds first element and returns (undefined, if not found)
```
const searchedOne = map.find(x=>x.name == "D")
```

## filter
Same as list filter. Pass a predicate to get filtered results.
```
const filtered = map.filter(m=>m.posts.some(p=>p.isPublished))
```

