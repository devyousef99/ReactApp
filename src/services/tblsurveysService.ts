import { APIService } from "services";

export const getTblsurveys = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTblsurveys(pageNo,pageSize);
    }
    else{
        try {
            res = await searchTblsurveys(search,pageNo,pageSize);
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


export const getAllTblsurveys = (pageno,pagesize) => {
return APIService.api().get(`/tblsurveys/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
export const getOneTblsurveys = (id) => {
return APIService.api().get(`/tblsurveys/read_one.php?id=${id}`)
}
export const searchTblsurveys = (key,pageno,pagesize) => {
return APIService.api().get(`/tblsurveys/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
export const addTblsurveys = (data) => {
return APIService.api().post(`/tblsurveys/create.php`,data)
}
export const updateTblsurveys = (data) => {
return APIService.api().post(`/tblsurveys/update.php`,data)
}
export const deleteTblsurveys = (id) => {
return APIService.api().post(`/tblsurveys/delete.php`,{id:id})
}
