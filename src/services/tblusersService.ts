import { APIService } from "services";

export const getTblusers = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTblusers(pageNo,pageSize);
    }
    else{
        try {
            res = await searchTblusers(search,pageNo,pageSize);
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


export const getAllTblusers = (pageno,pagesize) => {
return APIService.api().get(`/tblusers/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
export const getOneTblusers = (id) => {
return APIService.api().get(`/tblusers/read_one.php?id=${id}`)
}
export const searchTblusers = (key,pageno,pagesize) => {
return APIService.api().get(`/tblusers/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
export const addTblusers = (data) => {
return APIService.api().post(`/tblusers/create.php`,data)
}
export const updateTblusers = (data) => {
return APIService.api().post(`/tblusers/update.php`,data)
}
export const deleteTblusers = (id) => {
return APIService.api().post(`/tblusers/delete.php`,{id:id})
}
