import { APIService } from "services";

export const getTblsession = async (pageNo,pageSize,search) => {
    let res;
    if(search.length===0) {
        res = await getAllTblsession(pageNo,pageSize);
    }
    else{
        try {
            res = await searchTblsession(search,pageNo,pageSize);
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


export const getAllTblsession = (pageno,pagesize) => {
return APIService.api().get(`/tblsession/read.php?pageno=${pageno}&pagesize=${pagesize}`)
}
export const getOneTblsession = (id) => {
return APIService.api().get(`/tblsession/read_one.php?id=${id}`)
}
export const searchTblsession = (key,pageno,pagesize) => {
return APIService.api().get(`/tblsession/search.php?key=${key}&pageno=${pageno}&pagesize=${pagesize}`)
}
export const addTblsession = (data) => {
return APIService.api().post(`/tblsession/create.php`,data)
}
export const updateTblsession = (data) => {
return APIService.api().post(`/tblsession/update.php`,data)
}
export const deleteTblsession = (id) => {
return APIService.api().post(`/tblsession/delete.php`,{id:id})
}
