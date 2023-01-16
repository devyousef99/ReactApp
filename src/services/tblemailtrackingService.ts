import { APIService } from "services";

export const getTblemailtracking = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTblemailtracking(pageNo,pageSize);
    }
    else{
        try {
            res = await searchTblemailtracking(search,pageNo,pageSize);
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


export const getAllTblemailtracking = (pageno,pagesize) => {
return APIService.api().get(`/tblemailtracking/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
export const getOneTblemailtracking = (id) => {
return APIService.api().get(`/tblemailtracking/read_one.php?id=${id}`)
}
export const searchTblemailtracking = (key,pageno,pagesize) => {
return APIService.api().get(`/tblemailtracking/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
export const addTblemailtracking = (data) => {
return APIService.api().post(`/tblemailtracking/create.php`,data)
}
export const updateTblemailtracking = (data) => {
return APIService.api().post(`/tblemailtracking/update.php`,data)
}
export const deleteTblemailtracking = (id) => {
return APIService.api().post(`/tblemailtracking/delete.php`,{id:id})
}
