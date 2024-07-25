import {MapList, RecordUtil} from '../dist'
const {filter,find, findAll,map , createFrom} = RecordUtil
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
const keyedData = MapList.createFrom(dataFromSomeAPI);
assert.equal(keyedData.size,4)

const mapSearchByKeys = keyedData.findAll([101,103])
assert.equal(mapSearchByKeys.length,2)


const searchedOne = keyedData.find(x=>x.name == "D")
assert.equal(searchedOne!.id,103)

const filtered = keyedData.filter(m=>m.posts.some(p=>p.isPublished))
assert.equal(filtered.length,1)
assert.equal(filtered[0].id,102)


//Negatives
const mapSearchByKeysNegative = keyedData.findAll([109,110])
assert.equal(mapSearchByKeysNegative.length,0)

const searchedOneNegative = keyedData.find(x=>x.name == "E")
assert.equal(searchedOneNegative,undefined)

const filteredNegative = keyedData.filter(m=>m.posts.length>5)
assert.equal(filteredNegative.length,0)


interface ICar {
    tyre:number
}


// const listData = [{id:1, tyre:11}, {id:2, tyre:22}, {id:3, tyre:33}]
// const data7 = createFrom(listData,"id")

// const data: Record<number, ICar> = {1:{tyre:11}, 2:{tyre:22}, 3:{tyre:33}, 4:{tyre:44}}

// const filtered = filter(data, x=>x.tyre > 20)

// const finded = findAll(data, [1,2,3])

// const mapped = keyedData(data, r=>(r.tyre + 10))