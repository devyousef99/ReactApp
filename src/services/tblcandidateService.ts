import { APIService } from "services";

export const getTblcandidate = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTblcandidate(pageNo,pageSize);
    }
    else{
        try {
            res = await searchTblcandidate(search,pageNo,pageSize);
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


export const getAllTblcandidate = (pageno,pagesize) => {
return APIService.api().get(`/tblcandidate/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
export const getOneTblcandidate = (id) => {
return APIService.api().get(`/tblcandidate/read_one.php?id=${id}`)
}
export const searchTblcandidate = (key,pageno,pagesize) => {
return APIService.api().get(`/tblcandidate/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
export const addTblcandidate = (data) => {
return APIService.api().post(`/tblcandidate/create.php`,data)
}
export const updateTblcandidate = (data) => {
return APIService.api().post(`/tblcandidate/update.php`,data)
}
export const deleteTblcandidate = (id) => {
return APIService.api().post(`/tblcandidate/delete.php`,{id:id})
}
