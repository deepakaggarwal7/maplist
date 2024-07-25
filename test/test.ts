import {MapList} from '../dist'
import assert  from 'assert'


interface IPost{
    title: string,
    isPublished: boolean
}

interface IUser{
    id:number, name:string, posts:IPost[]
}



const dataFromSomeAPI:IUser[] = [
    {id:100, name:"A", posts:[{"title":"Extract keyword",isPublished:false}]},
    {id:101, name:"B", posts:[{"title":"Future with AI",isPublished:false}]},
    {id:102, name:"C", posts:[{"title":"CI/CD SQL Pain",isPublished:true}]},
    {id:103, name:"D", posts:[{"title":"Figma or XD",isPublished:false}]},
]


//Positive
const map = MapList.createFrom(dataFromSomeAPI);
assert.equal(map.size,4)

const mapSearchByKeys = map.findAll([101,103])
assert.equal(mapSearchByKeys.length,2)


const searchedOne = map.find(x=>x.name == "D")
assert.equal(searchedOne!.id,103)

const filtered = map.filter(m=>m.posts.some(p=>p.isPublished))
assert.equal(filtered.length,1)
assert.equal(filtered[0].id,102)


//Negatives
const mapSearchByKeysNegative = map.findAll([109,110])
assert.equal(mapSearchByKeysNegative.length,0)

const searchedOneNegative = map.find(x=>x.name == "E")
assert.equal(searchedOneNegative,undefined)

const filteredNegative = map.filter(m=>m.posts.length>5)
assert.equal(filteredNegative.length,0)

