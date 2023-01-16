import { APIService } from "services";

export const getTblanswers = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTblanswers(pageNo,pageSize);
    }
    else{
        try {
            res = await searchTblanswers(search,pageNo,pageSize);
        } catch(err) {
             return { records:[], totalCount:0 }
        }
    }
    if(res && res.data && res.data.document){
    return res.data.document;
    }else{
    return { records:[], totalCount:0 }
    }
    
}


export const getAllTblanswers = (pageno,pagesize) => {
return APIService.api().get(`/tblanswers/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
export const getOneTblanswers = (id) => {
return APIService.api().get(`/tblanswers/read_one.php?id=${id}`)
}
export const searchTblanswers = (key,pageno,pagesize) => {
return APIService.api().get(`/tblanswers/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
export const addTblanswers = (data) => {
return APIService.api().post(`/tblanswers/create.php`,data)
}
export const updateTblanswers = (data) => {
return APIService.api().post(`/tblanswers/update.php`,data)
}
export const deleteTblanswers = (id) => {
return APIService.api().post(`/tblanswers/delete.php`,{id:id})
}
