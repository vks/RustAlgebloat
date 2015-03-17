var searchIndex = {};
searchIndex['algebloat'] = {"items":[[0,"","algebloat","",null,null],[0,"matrix","","",null,null],[3,"Matrix","algebloat::matrix","",null,null],[5,"write_mat","","",null,{"inputs":[{"name":"formatter"},{"name":"t"}],"output":{"name":"result"}}],[11,"new","","",0,null],[11,"eye","","",0,{"inputs":[{"name":"matrix"},{"name":"usize"}],"output":{"name":"matrix"}}],[11,"zeros","","",0,{"inputs":[{"name":"matrix"},{"name":"usize"},{"name":"usize"}],"output":{"name":"matrix"}}],[11,"ones","","",0,{"inputs":[{"name":"matrix"},{"name":"usize"},{"name":"usize"}],"output":{"name":"matrix"}}],[11,"from_elem","","",0,{"inputs":[{"name":"matrix"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":{"name":"matrix"}}],[11,"from_fn","","",0,{"inputs":[{"name":"matrix"},{"name":"usize"},{"name":"usize"},{"name":"f"}],"output":{"name":"matrix"}}],[11,"from_iter","","",0,{"inputs":[{"name":"matrix"},{"name":"usize"},{"name":"usize"},{"name":"t"}],"output":{"name":"matrix"}}],[11,"raw_get","","",0,{"inputs":[{"name":"matrix"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",0,{"inputs":[{"name":"matrix"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"nrow","","",0,{"inputs":[{"name":"matrix"}],"output":{"name":"usize"}}],[11,"ncol","","",0,{"inputs":[{"name":"matrix"}],"output":{"name":"usize"}}],[11,"fmt","","",0,{"inputs":[{"name":"matrix"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"bin_funs","algebloat","",null,null],[3,"PowOp","algebloat::bin_funs","",null,null],[3,"HypotOp","","",null,null],[3,"Atan2Op","","",null,null],[8,"VectorPowOp","","",null,null],[10,"powf","","",1,{"inputs":[{"name":"vectorpowop"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[8,"VectorHypotOp","","",null,null],[10,"hypot","","",2,{"inputs":[{"name":"vectorhypotop"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[8,"VectorAtan2Op","","",null,null],[10,"atan2","","",3,{"inputs":[{"name":"vectoratan2op"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[11,"clone","","",4,{"inputs":[{"name":"powop"}],"output":{"name":"powop"}}],[11,"new","","",4,{"inputs":[{"name":"powop"}],"output":{"name":"powop"}}],[11,"op","","",4,{"inputs":[{"name":"powop"},{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",5,{"inputs":[{"name":"hypotop"}],"output":{"name":"hypotop"}}],[11,"new","","",5,{"inputs":[{"name":"hypotop"}],"output":{"name":"hypotop"}}],[11,"op","","",5,{"inputs":[{"name":"hypotop"},{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",6,{"inputs":[{"name":"atan2op"}],"output":{"name":"atan2op"}}],[11,"new","","",6,{"inputs":[{"name":"atan2op"}],"output":{"name":"atan2op"}}],[11,"op","","",6,{"inputs":[{"name":"atan2op"},{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[0,"traits","algebloat","",null,null],[8,"MatrixRawGet","algebloat::traits","",null,null],[10,"raw_get","","",7,{"inputs":[{"name":"matrixrawget"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[8,"MatrixRawSet","","",null,null],[10,"raw_set","","",8,{"inputs":[{"name":"matrixrawset"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[8,"MatrixGet","","",null,null],[10,"unsafe_get","","",9,{"inputs":[{"name":"matrixget"},{"name":"t"}],"output":{"name":"f64"}}],[10,"get","","",9,{"inputs":[{"name":"matrixget"},{"name":"t"}],"output":{"name":"f64"}}],[8,"MatrixSet","","",null,null],[10,"unsafe_set","","",10,{"inputs":[{"name":"matrixset"},{"name":"t"},{"name":"f64"}],"output":null}],[10,"set","","",10,{"inputs":[{"name":"matrixset"},{"name":"t"},{"name":"f64"}],"output":null}],[8,"MatrixShape","","",null,null],[10,"ncol","","",11,{"inputs":[{"name":"matrixshape"}],"output":{"name":"usize"}}],[10,"nrow","","",11,{"inputs":[{"name":"matrixshape"}],"output":{"name":"usize"}}],[11,"size","","",11,null],[11,"len","","",11,{"inputs":[{"name":"matrixshape"}],"output":{"name":"usize"}}],[8,"SameShape","","",null,null],[10,"same_shape","","",12,{"inputs":[{"name":"sameshape"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[8,"MatrixTranspose","","",null,null],[10,"t","","",13,{"inputs":[{"name":"matrixtranspose"}],"output":{"name":"transposer"}}],[8,"MatrixRowAccess","","",null,null],[10,"unsafe_row","","",14,{"inputs":[{"name":"matrixrowaccess"},{"name":"usize"}],"output":{"name":"rowaccessor"}}],[10,"row","","",14,{"inputs":[{"name":"matrixrowaccess"},{"name":"usize"}],"output":{"name":"rowaccessor"}}],[8,"MatrixColumnAccess","","",null,null],[10,"unsafe_col","","",15,{"inputs":[{"name":"matrixcolumnaccess"},{"name":"usize"}],"output":{"name":"columnaccessor"}}],[10,"col","","",15,{"inputs":[{"name":"matrixcolumnaccess"},{"name":"usize"}],"output":{"name":"columnaccessor"}}],[8,"MatrixView","","",null,null],[10,"unsafe_view","","",16,{"inputs":[{"name":"matrixview"},{"name":"rowrangetype"},{"name":"colrangetype"}],"output":{"name":"view"}}],[10,"view","","",16,{"inputs":[{"name":"matrixview"},{"name":"rowrangetype"},{"name":"colrangetype"}],"output":{"name":"view"}}],[8,"MatrixReshape","","",null,null],[10,"unsafe_reshape","","",17,{"inputs":[{"name":"matrixreshape"},{"name":"usize"},{"name":"usize"}],"output":{"name":"reshape"}}],[10,"reshape","","",17,{"inputs":[{"name":"matrixreshape"},{"name":"usize"},{"name":"usize"}],"output":{"name":"reshape"}}],[8,"MatrixSlice","","",null,null],[10,"unsafe_slice","","",18,{"inputs":[{"name":"matrixslice"},{"name":"rangetype"}],"output":{"name":"slice"}}],[10,"slice","","",18,{"inputs":[{"name":"matrixslice"},{"name":"rangetype"}],"output":{"name":"slice"}}],[8,"MatrixAssign","","",null,null],[10,"unsafe_assign","","",19,{"inputs":[{"name":"matrixassign"},{"name":"rhs"}],"output":null}],[10,"assign","","",19,{"inputs":[{"name":"matrixassign"},{"name":"rhs"}],"output":null}],[8,"MatrixMultiply","","",null,null],[10,"unsafe_mat_mul","","",20,{"inputs":[{"name":"matrixmultiply"},{"name":"rhs"}],"output":{"name":"matrix"}}],[10,"unsafe_mat_mul_lazy","","",20,{"inputs":[{"name":"matrixmultiply"},{"name":"rhs"}],"output":{"name":"matrixmul"}}],[10,"mat_mul","","",20,{"inputs":[{"name":"matrixmultiply"},{"name":"rhs"}],"output":{"name":"matrix"}}],[10,"mat_mul_lazy","","",20,{"inputs":[{"name":"matrixmultiply"},{"name":"rhs"}],"output":{"name":"matrixmul"}}],[8,"MatrixHStack","","",null,null],[10,"unsafe_hstack","","",21,{"inputs":[{"name":"matrixhstack"},{"name":"r"}],"output":{"name":"hstack"}}],[10,"hstack","","",21,{"inputs":[{"name":"matrixhstack"},{"name":"r"}],"output":{"name":"hstack"}}],[8,"MatrixVStack","","",null,null],[10,"unsafe_vstack","","",22,{"inputs":[{"name":"matrixvstack"},{"name":"b"}],"output":{"name":"vstack"}}],[10,"vstack","","",22,{"inputs":[{"name":"matrixvstack"},{"name":"b"}],"output":{"name":"vstack"}}],[8,"MatrixElems","","",null,null],[10,"elems","","",23,{"inputs":[{"name":"matrixelems"}],"output":{"name":"matrixelements"}}],[8,"ToMatrix","","",null,null],[10,"to_mat","","",24,{"inputs":[{"name":"tomatrix"}],"output":{"name":"matrix"}}],[0,"transpose","algebloat","",null,null],[3,"Transposer","algebloat::transpose","",null,null],[11,"new","","",25,{"inputs":[{"name":"transposer"},{"name":"t"}],"output":{"name":"transposer"}}],[11,"raw_get","","",25,{"inputs":[{"name":"transposer"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",25,{"inputs":[{"name":"transposer"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"ncol","","",25,{"inputs":[{"name":"transposer"}],"output":{"name":"usize"}}],[11,"nrow","","",25,{"inputs":[{"name":"transposer"}],"output":{"name":"usize"}}],[11,"same_shape","","",25,{"inputs":[{"name":"transposer"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"fmt","","",25,{"inputs":[{"name":"transposer"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",25,{"inputs":[{"name":"transposer"}],"output":{"name":"transposer"}}],[0,"view","algebloat","",null,null],[3,"View","algebloat::view","",null,null],[11,"unsafe_new","","",26,{"inputs":[{"name":"view"},{"name":"t"},{"name":"usize"},{"name":"usize"},{"name":"usize"},{"name":"usize"}],"output":{"name":"view"}}],[11,"new","","",26,{"inputs":[{"name":"view"},{"name":"t"},{"name":"usize"},{"name":"usize"},{"name":"usize"},{"name":"usize"}],"output":{"name":"view"}}],[11,"raw_get","","",26,{"inputs":[{"name":"view"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",26,{"inputs":[{"name":"view"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"nrow","","",26,{"inputs":[{"name":"view"}],"output":{"name":"usize"}}],[11,"ncol","","",26,{"inputs":[{"name":"view"}],"output":{"name":"usize"}}],[11,"same_shape","","",26,{"inputs":[{"name":"view"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"clone","","",26,{"inputs":[{"name":"view"}],"output":{"name":"view"}}],[11,"fmt","","",26,{"inputs":[{"name":"view"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"row_accessor","algebloat","",null,null],[3,"RowAccessor","algebloat::row_accessor","",null,null],[11,"unsafe_new","","",27,{"inputs":[{"name":"rowaccessor"},{"name":"t"},{"name":"usize"}],"output":{"name":"rowaccessor"}}],[11,"new","","",27,{"inputs":[{"name":"rowaccessor"},{"name":"t"},{"name":"usize"}],"output":{"name":"rowaccessor"}}],[11,"nrow","","",27,{"inputs":[{"name":"rowaccessor"}],"output":{"name":"usize"}}],[11,"ncol","","",27,{"inputs":[{"name":"rowaccessor"}],"output":{"name":"usize"}}],[11,"same_shape","","",27,{"inputs":[{"name":"rowaccessor"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"raw_get","","",27,{"inputs":[{"name":"rowaccessor"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",27,{"inputs":[{"name":"rowaccessor"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"fmt","","",27,{"inputs":[{"name":"rowaccessor"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",27,{"inputs":[{"name":"rowaccessor"}],"output":{"name":"rowaccessor"}}],[0,"column_accessor","algebloat","",null,null],[3,"ColumnAccessor","algebloat::column_accessor","",null,null],[11,"unsafe_new","","",28,{"inputs":[{"name":"columnaccessor"},{"name":"t"},{"name":"usize"}],"output":{"name":"columnaccessor"}}],[11,"new","","",28,{"inputs":[{"name":"columnaccessor"},{"name":"t"},{"name":"usize"}],"output":{"name":"columnaccessor"}}],[11,"nrow","","",28,{"inputs":[{"name":"columnaccessor"}],"output":{"name":"usize"}}],[11,"ncol","","",28,{"inputs":[{"name":"columnaccessor"}],"output":{"name":"usize"}}],[11,"same_shape","","",28,{"inputs":[{"name":"columnaccessor"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"raw_get","","",28,{"inputs":[{"name":"columnaccessor"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",28,{"inputs":[{"name":"columnaccessor"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"fmt","","",28,{"inputs":[{"name":"columnaccessor"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",28,{"inputs":[{"name":"columnaccessor"}],"output":{"name":"columnaccessor"}}],[0,"elements","algebloat","",null,null],[3,"MatrixElements","algebloat::elements","",null,null],[11,"new","","",29,{"inputs":[{"name":"matrixelements"},{"name":"t"}],"output":{"name":"matrixelements"}}],[6,"Item","","",null,null],[11,"next","","",29,{"inputs":[{"name":"matrixelements"}],"output":{"name":"option"}}],[0,"hstack","algebloat","",null,null],[3,"HStack","algebloat::hstack","",null,null],[11,"raw_get","","",30,{"inputs":[{"name":"hstack"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",30,{"inputs":[{"name":"hstack"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"nrow","","",30,{"inputs":[{"name":"hstack"}],"output":{"name":"usize"}}],[11,"ncol","","",30,{"inputs":[{"name":"hstack"}],"output":{"name":"usize"}}],[11,"same_shape","","",30,{"inputs":[{"name":"hstack"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"clone","","",30,{"inputs":[{"name":"hstack"}],"output":{"name":"hstack"}}],[11,"fmt","","",30,{"inputs":[{"name":"hstack"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"matrix_mul","algebloat","",null,null],[3,"MatrixMul","algebloat::matrix_mul","",null,null],[11,"unsafe_new","","",31,{"inputs":[{"name":"matrixmul"},{"name":"lhs"},{"name":"rhs"}],"output":{"name":"matrixmul"}}],[11,"new","","",31,{"inputs":[{"name":"matrixmul"},{"name":"lhs"},{"name":"rhs"}],"output":{"name":"matrixmul"}}],[11,"raw_get","","",31,{"inputs":[{"name":"matrixmul"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"nrow","","",31,{"inputs":[{"name":"matrixmul"}],"output":{"name":"usize"}}],[11,"ncol","","",31,{"inputs":[{"name":"matrixmul"}],"output":{"name":"usize"}}],[11,"clone","","",31,{"inputs":[{"name":"matrixmul"}],"output":{"name":"matrixmul"}}],[11,"fmt","","",31,{"inputs":[{"name":"matrixmul"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"bin_ops","algebloat","",null,null],[3,"OpAdd","algebloat::bin_ops","",null,null],[3,"OpSub","","",null,null],[3,"OpDiv","","",null,null],[3,"OpMul","","",null,null],[3,"MatrixBinOp","","",null,null],[8,"BinOp","","",null,null],[10,"op","","",32,{"inputs":[{"name":"binop"},{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",33,{"inputs":[{"name":"opadd"}],"output":{"name":"opadd"}}],[11,"new","","",33,{"inputs":[{"name":"opadd"}],"output":{"name":"opadd"}}],[11,"op","","",33,{"inputs":[{"name":"opadd"},{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",34,{"inputs":[{"name":"opsub"}],"output":{"name":"opsub"}}],[11,"new","","",34,{"inputs":[{"name":"opsub"}],"output":{"name":"opsub"}}],[11,"op","","",34,{"inputs":[{"name":"opsub"},{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",35,{"inputs":[{"name":"opdiv"}],"output":{"name":"opdiv"}}],[11,"new","","",35,{"inputs":[{"name":"opdiv"}],"output":{"name":"opdiv"}}],[11,"op","","",35,{"inputs":[{"name":"opdiv"},{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",36,{"inputs":[{"name":"opmul"}],"output":{"name":"opmul"}}],[11,"new","","",36,{"inputs":[{"name":"opmul"}],"output":{"name":"opmul"}}],[11,"op","","",36,{"inputs":[{"name":"opmul"},{"name":"f64"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"unsafe_new","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"ta"},{"name":"tb"},{"name":"to"}],"output":{"name":"matrixbinop"}}],[11,"new","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"ta"},{"name":"tb"},{"name":"to"}],"output":{"name":"matrixbinop"}}],[11,"clone","","",37,{"inputs":[{"name":"matrixbinop"}],"output":{"name":"matrixbinop"}}],[11,"raw_get","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"nrow","","",37,{"inputs":[{"name":"matrixbinop"}],"output":{"name":"usize"}}],[11,"ncol","","",37,{"inputs":[{"name":"matrixbinop"}],"output":{"name":"usize"}}],[11,"same_shape","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"fmt","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"Output","","",null,null],[11,"add","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"add","algebloat::view","",26,{"inputs":[{"name":"view"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"add","algebloat::transpose","",25,{"inputs":[{"name":"transposer"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"add","algebloat::row_accessor","",27,{"inputs":[{"name":"rowaccessor"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"add","algebloat::column_accessor","",28,{"inputs":[{"name":"columnaccessor"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"add","algebloat::matrix_mul","",31,{"inputs":[{"name":"matrixmul"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"add","algebloat::hstack","",30,{"inputs":[{"name":"hstack"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[6,"Output","","",null,null],[11,"sub","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"sub","algebloat::view","",26,{"inputs":[{"name":"view"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"sub","algebloat::transpose","",25,{"inputs":[{"name":"transposer"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"sub","algebloat::row_accessor","",27,{"inputs":[{"name":"rowaccessor"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"sub","algebloat::column_accessor","",28,{"inputs":[{"name":"columnaccessor"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"sub","algebloat::matrix_mul","",31,{"inputs":[{"name":"matrixmul"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"sub","algebloat::hstack","",30,{"inputs":[{"name":"hstack"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[6,"Output","","",null,null],[11,"mul","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"mul","algebloat::view","",26,{"inputs":[{"name":"view"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"mul","algebloat::transpose","",25,{"inputs":[{"name":"transposer"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"mul","algebloat::row_accessor","",27,{"inputs":[{"name":"rowaccessor"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"mul","algebloat::column_accessor","",28,{"inputs":[{"name":"columnaccessor"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"mul","algebloat::matrix_mul","",31,{"inputs":[{"name":"matrixmul"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"mul","algebloat::hstack","",30,{"inputs":[{"name":"hstack"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[6,"Output","","",null,null],[11,"div","","",37,{"inputs":[{"name":"matrixbinop"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"div","algebloat::view","",26,{"inputs":[{"name":"view"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"div","algebloat::transpose","",25,{"inputs":[{"name":"transposer"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"div","algebloat::row_accessor","",27,{"inputs":[{"name":"rowaccessor"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"div","algebloat::column_accessor","",28,{"inputs":[{"name":"columnaccessor"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"div","algebloat::matrix_mul","",31,{"inputs":[{"name":"matrixmul"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[11,"div","algebloat::hstack","",30,{"inputs":[{"name":"hstack"},{"name":"rhs"}],"output":{"name":"matrixbinop"}}],[6,"Output","algebloat::bin_ops","",null,null],[0,"scalar","algebloat","",null,null],[0,"index","","",null,null],[8,"MatrixIndexGet","algebloat::index","",null,null],[10,"unsafe_get_idx","","",38,{"inputs":[{"name":"matrixindexget"},{"name":"t"}],"output":{"name":"f64"}}],[10,"get_idx","","",38,{"inputs":[{"name":"matrixindexget"},{"name":"t"}],"output":{"name":"f64"}}],[8,"MatrixIndexSet","","",null,null],[10,"unsafe_set_idx","","",39,{"inputs":[{"name":"matrixindexset"},{"name":"t"},{"name":"f64"}],"output":null}],[10,"set_idx","","",39,{"inputs":[{"name":"matrixindexset"},{"name":"t"},{"name":"f64"}],"output":null}],[0,"un_ops","algebloat","",null,null],[3,"OpNeg","algebloat::un_ops","",null,null],[3,"MatrixUnOp","","",null,null],[8,"UnOp","","",null,null],[10,"op","","",40,{"inputs":[{"name":"unop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",41,{"inputs":[{"name":"opneg"}],"output":{"name":"opneg"}}],[11,"new","","",41,{"inputs":[{"name":"opneg"}],"output":{"name":"opneg"}}],[11,"op","","",41,{"inputs":[{"name":"opneg"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"new","","",42,{"inputs":[{"name":"matrixunop"},{"name":"ta"},{"name":"to"}],"output":{"name":"matrixunop"}}],[11,"clone","","",42,{"inputs":[{"name":"matrixunop"}],"output":{"name":"matrixunop"}}],[11,"raw_get","","",42,{"inputs":[{"name":"matrixunop"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"nrow","","",42,{"inputs":[{"name":"matrixunop"}],"output":{"name":"usize"}}],[11,"ncol","","",42,{"inputs":[{"name":"matrixunop"}],"output":{"name":"usize"}}],[11,"same_shape","","",42,{"inputs":[{"name":"matrixunop"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"fmt","","",42,{"inputs":[{"name":"matrixunop"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"Output","","",null,null],[11,"neg","","",42,{"inputs":[{"name":"matrixunop"}],"output":{"name":"matrixunop"}}],[6,"Output","","",null,null],[11,"neg","algebloat::bin_ops","",37,{"inputs":[{"name":"matrixbinop"}],"output":{"name":"matrixunop"}}],[6,"Output","algebloat::un_ops","",null,null],[6,"Output","","",null,null],[11,"neg","algebloat::row_accessor","",27,{"inputs":[{"name":"rowaccessor"}],"output":{"name":"matrixunop"}}],[6,"Output","algebloat::un_ops","",null,null],[11,"neg","algebloat::column_accessor","",28,{"inputs":[{"name":"columnaccessor"}],"output":{"name":"matrixunop"}}],[6,"Output","algebloat::un_ops","",null,null],[11,"neg","algebloat::transpose","",25,{"inputs":[{"name":"transposer"}],"output":{"name":"matrixunop"}}],[6,"Output","algebloat::un_ops","",null,null],[11,"neg","algebloat::view","",26,{"inputs":[{"name":"view"}],"output":{"name":"matrixunop"}}],[6,"Output","algebloat::un_ops","",null,null],[6,"Output","","",null,null],[6,"Output","","",null,null],[11,"neg","algebloat::matrix_mul","",31,{"inputs":[{"name":"matrixmul"}],"output":{"name":"matrixunop"}}],[6,"Output","algebloat::un_ops","",null,null],[11,"neg","algebloat::hstack","",30,{"inputs":[{"name":"hstack"}],"output":{"name":"matrixunop"}}],[6,"Output","algebloat::un_ops","",null,null],[0,"un_funs","algebloat","",null,null],[3,"AbsOp","algebloat::un_funs","",null,null],[3,"AcosOp","","",null,null],[3,"AsinOp","","",null,null],[3,"AtanOp","","",null,null],[3,"CeilOp","","",null,null],[3,"CosOp","","",null,null],[3,"CoshOp","","",null,null],[3,"ExpOp","","",null,null],[3,"FloorOp","","",null,null],[3,"LnOp","","",null,null],[3,"Log10Op","","",null,null],[3,"RoundOp","","",null,null],[3,"SinOp","","",null,null],[3,"SinhOp","","",null,null],[3,"SqrtOp","","",null,null],[3,"TanOp","","",null,null],[3,"TanhOp","","",null,null],[3,"InvOp","","",null,null],[8,"Inv","","",null,null],[10,"inv","","",43,{"inputs":[{"name":"inv"}],"output":{"name":"self"}}],[8,"MatrixAbsOp","","",null,null],[10,"abs","","",44,{"inputs":[{"name":"matrixabsop"}],"output":{"name":"matrixunop"}}],[8,"MatrixAcosOp","","",null,null],[10,"acos","","",45,{"inputs":[{"name":"matrixacosop"}],"output":{"name":"matrixunop"}}],[8,"MatrixAsinOp","","",null,null],[10,"asin","","",46,{"inputs":[{"name":"matrixasinop"}],"output":{"name":"matrixunop"}}],[8,"MatrixAtanOp","","",null,null],[10,"atan","","",47,{"inputs":[{"name":"matrixatanop"}],"output":{"name":"matrixunop"}}],[8,"MatrixCeilOp","","",null,null],[10,"ceil","","",48,{"inputs":[{"name":"matrixceilop"}],"output":{"name":"matrixunop"}}],[8,"MatrixCosOp","","",null,null],[10,"cos","","",49,{"inputs":[{"name":"matrixcosop"}],"output":{"name":"matrixunop"}}],[8,"MatrixCoshOp","","",null,null],[10,"cosh","","",50,{"inputs":[{"name":"matrixcoshop"}],"output":{"name":"matrixunop"}}],[8,"MatrixExpOp","","",null,null],[10,"exp","","",51,{"inputs":[{"name":"matrixexpop"}],"output":{"name":"matrixunop"}}],[8,"MatrixFloorOp","","",null,null],[10,"floor","","",52,{"inputs":[{"name":"matrixfloorop"}],"output":{"name":"matrixunop"}}],[8,"MatrixLnOp","","",null,null],[10,"ln","","",53,{"inputs":[{"name":"matrixlnop"}],"output":{"name":"matrixunop"}}],[8,"MatrixLog10Op","","",null,null],[10,"log10","","",54,{"inputs":[{"name":"matrixlog10op"}],"output":{"name":"matrixunop"}}],[8,"MatrixRoundOp","","",null,null],[10,"round","","",55,{"inputs":[{"name":"matrixroundop"}],"output":{"name":"matrixunop"}}],[8,"MatrixSinOp","","",null,null],[10,"sin","","",56,{"inputs":[{"name":"matrixsinop"}],"output":{"name":"matrixunop"}}],[8,"MatrixSinhOp","","",null,null],[10,"sinh","","",57,{"inputs":[{"name":"matrixsinhop"}],"output":{"name":"matrixunop"}}],[8,"MatrixSqrtOp","","",null,null],[10,"sqrt","","",58,{"inputs":[{"name":"matrixsqrtop"}],"output":{"name":"matrixunop"}}],[8,"MatrixTanOp","","",null,null],[10,"tan","","",59,{"inputs":[{"name":"matrixtanop"}],"output":{"name":"matrixunop"}}],[8,"MatrixTanhOp","","",null,null],[10,"tanh","","",60,{"inputs":[{"name":"matrixtanhop"}],"output":{"name":"matrixunop"}}],[8,"MatrixInvOp","","",null,null],[10,"inv","","",61,{"inputs":[{"name":"matrixinvop"}],"output":{"name":"matrixunop"}}],[11,"clone","","",62,{"inputs":[{"name":"absop"}],"output":{"name":"absop"}}],[11,"new","","",62,{"inputs":[{"name":"absop"}],"output":{"name":"absop"}}],[11,"op","","",62,{"inputs":[{"name":"absop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",63,{"inputs":[{"name":"acosop"}],"output":{"name":"acosop"}}],[11,"new","","",63,{"inputs":[{"name":"acosop"}],"output":{"name":"acosop"}}],[11,"op","","",63,{"inputs":[{"name":"acosop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",64,{"inputs":[{"name":"asinop"}],"output":{"name":"asinop"}}],[11,"new","","",64,{"inputs":[{"name":"asinop"}],"output":{"name":"asinop"}}],[11,"op","","",64,{"inputs":[{"name":"asinop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",65,{"inputs":[{"name":"atanop"}],"output":{"name":"atanop"}}],[11,"new","","",65,{"inputs":[{"name":"atanop"}],"output":{"name":"atanop"}}],[11,"op","","",65,{"inputs":[{"name":"atanop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",66,{"inputs":[{"name":"ceilop"}],"output":{"name":"ceilop"}}],[11,"new","","",66,{"inputs":[{"name":"ceilop"}],"output":{"name":"ceilop"}}],[11,"op","","",66,{"inputs":[{"name":"ceilop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",67,{"inputs":[{"name":"cosop"}],"output":{"name":"cosop"}}],[11,"new","","",67,{"inputs":[{"name":"cosop"}],"output":{"name":"cosop"}}],[11,"op","","",67,{"inputs":[{"name":"cosop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",68,{"inputs":[{"name":"coshop"}],"output":{"name":"coshop"}}],[11,"new","","",68,{"inputs":[{"name":"coshop"}],"output":{"name":"coshop"}}],[11,"op","","",68,{"inputs":[{"name":"coshop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",69,{"inputs":[{"name":"expop"}],"output":{"name":"expop"}}],[11,"new","","",69,{"inputs":[{"name":"expop"}],"output":{"name":"expop"}}],[11,"op","","",69,{"inputs":[{"name":"expop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",70,{"inputs":[{"name":"floorop"}],"output":{"name":"floorop"}}],[11,"new","","",70,{"inputs":[{"name":"floorop"}],"output":{"name":"floorop"}}],[11,"op","","",70,{"inputs":[{"name":"floorop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",71,{"inputs":[{"name":"lnop"}],"output":{"name":"lnop"}}],[11,"new","","",71,{"inputs":[{"name":"lnop"}],"output":{"name":"lnop"}}],[11,"op","","",71,{"inputs":[{"name":"lnop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",72,{"inputs":[{"name":"log10op"}],"output":{"name":"log10op"}}],[11,"new","","",72,{"inputs":[{"name":"log10op"}],"output":{"name":"log10op"}}],[11,"op","","",72,{"inputs":[{"name":"log10op"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",73,{"inputs":[{"name":"roundop"}],"output":{"name":"roundop"}}],[11,"new","","",73,{"inputs":[{"name":"roundop"}],"output":{"name":"roundop"}}],[11,"op","","",73,{"inputs":[{"name":"roundop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",74,{"inputs":[{"name":"sinop"}],"output":{"name":"sinop"}}],[11,"new","","",74,{"inputs":[{"name":"sinop"}],"output":{"name":"sinop"}}],[11,"op","","",74,{"inputs":[{"name":"sinop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",75,{"inputs":[{"name":"sinhop"}],"output":{"name":"sinhop"}}],[11,"new","","",75,{"inputs":[{"name":"sinhop"}],"output":{"name":"sinhop"}}],[11,"op","","",75,{"inputs":[{"name":"sinhop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",76,{"inputs":[{"name":"sqrtop"}],"output":{"name":"sqrtop"}}],[11,"new","","",76,{"inputs":[{"name":"sqrtop"}],"output":{"name":"sqrtop"}}],[11,"op","","",76,{"inputs":[{"name":"sqrtop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",77,{"inputs":[{"name":"tanop"}],"output":{"name":"tanop"}}],[11,"new","","",77,{"inputs":[{"name":"tanop"}],"output":{"name":"tanop"}}],[11,"op","","",77,{"inputs":[{"name":"tanop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",78,{"inputs":[{"name":"tanhop"}],"output":{"name":"tanhop"}}],[11,"new","","",78,{"inputs":[{"name":"tanhop"}],"output":{"name":"tanhop"}}],[11,"op","","",78,{"inputs":[{"name":"tanhop"},{"name":"f64"}],"output":{"name":"f64"}}],[11,"clone","","",79,{"inputs":[{"name":"invop"}],"output":{"name":"invop"}}],[11,"new","","",79,{"inputs":[{"name":"invop"}],"output":{"name":"invop"}}],[11,"op","","",79,{"inputs":[{"name":"invop"},{"name":"f64"}],"output":{"name":"f64"}}],[0,"vstack","algebloat","",null,null],[3,"VStack","algebloat::vstack","",null,null],[11,"raw_get","","",80,{"inputs":[{"name":"vstack"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",80,{"inputs":[{"name":"vstack"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"nrow","","",80,{"inputs":[{"name":"vstack"}],"output":{"name":"usize"}}],[11,"ncol","","",80,{"inputs":[{"name":"vstack"}],"output":{"name":"usize"}}],[11,"same_shape","","",80,{"inputs":[{"name":"vstack"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"clone","","",80,{"inputs":[{"name":"vstack"}],"output":{"name":"vstack"}}],[11,"fmt","","",80,{"inputs":[{"name":"vstack"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"reductions","algebloat","",null,null],[8,"MatrixReduce","algebloat::reductions","",null,null],[10,"min","","",81,{"inputs":[{"name":"matrixreduce"}],"output":{"name":"option"}}],[10,"max","","",81,{"inputs":[{"name":"matrixreduce"}],"output":{"name":"option"}}],[0,"reshape","algebloat","",null,null],[3,"Reshape","algebloat::reshape","",null,null],[11,"unsafe_new","","",82,{"inputs":[{"name":"reshape"},{"name":"t"},{"name":"usize"},{"name":"usize"}],"output":{"name":"reshape"}}],[11,"new","","",82,{"inputs":[{"name":"reshape"},{"name":"t"},{"name":"usize"},{"name":"usize"}],"output":{"name":"reshape"}}],[11,"raw_get","","",82,{"inputs":[{"name":"reshape"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",82,{"inputs":[{"name":"reshape"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"nrow","","",82,{"inputs":[{"name":"reshape"}],"output":{"name":"usize"}}],[11,"ncol","","",82,{"inputs":[{"name":"reshape"}],"output":{"name":"usize"}}],[11,"same_shape","","",82,{"inputs":[{"name":"reshape"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"clone","","",82,{"inputs":[{"name":"reshape"}],"output":{"name":"reshape"}}],[11,"fmt","","",82,{"inputs":[{"name":"reshape"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"slice","algebloat","",null,null],[3,"Slice","algebloat::slice","",null,null],[11,"unsafe_new","","",83,{"inputs":[{"name":"slice"},{"name":"t"},{"name":"usize"},{"name":"usize"}],"output":{"name":"slice"}}],[11,"new","","",83,{"inputs":[{"name":"slice"},{"name":"t"},{"name":"usize"},{"name":"usize"}],"output":{"name":"slice"}}],[11,"raw_get","","",83,{"inputs":[{"name":"slice"},{"name":"usize"},{"name":"usize"}],"output":{"name":"f64"}}],[11,"raw_set","","",83,{"inputs":[{"name":"slice"},{"name":"usize"},{"name":"usize"},{"name":"f64"}],"output":null}],[11,"nrow","","",83,{"inputs":[{"name":"slice"}],"output":{"name":"usize"}}],[11,"ncol","","",83,{"inputs":[{"name":"slice"}],"output":{"name":"usize"}}],[11,"same_shape","","",83,{"inputs":[{"name":"slice"},{"name":"usize"},{"name":"usize"}],"output":{"name":"bool"}}],[11,"clone","","",83,{"inputs":[{"name":"slice"}],"output":{"name":"slice"}}],[11,"fmt","","",83,{"inputs":[{"name":"slice"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"add","algebloat::un_ops","",42,null],[11,"add","algebloat::slice","",83,null],[11,"add","algebloat::reshape","",82,null],[11,"add","algebloat::vstack","",80,null],[11,"sub","algebloat::un_ops","",42,null],[11,"sub","algebloat::slice","",83,null],[11,"sub","algebloat::reshape","",82,null],[11,"sub","algebloat::vstack","",80,null],[11,"mul","algebloat::un_ops","",42,null],[11,"mul","algebloat::slice","",83,null],[11,"mul","algebloat::reshape","",82,null],[11,"mul","algebloat::vstack","",80,null],[11,"div","algebloat::un_ops","",42,null],[11,"div","algebloat::slice","",83,null],[11,"div","algebloat::reshape","",82,null],[11,"div","algebloat::vstack","",80,null],[11,"neg","algebloat::slice","",83,null],[11,"neg","algebloat::reshape","",82,null],[11,"neg","algebloat::vstack","",80,null]],"paths":[[3,"Matrix"],[8,"VectorPowOp"],[8,"VectorHypotOp"],[8,"VectorAtan2Op"],[3,"PowOp"],[3,"HypotOp"],[3,"Atan2Op"],[8,"MatrixRawGet"],[8,"MatrixRawSet"],[8,"MatrixGet"],[8,"MatrixSet"],[8,"MatrixShape"],[8,"SameShape"],[8,"MatrixTranspose"],[8,"MatrixRowAccess"],[8,"MatrixColumnAccess"],[8,"MatrixView"],[8,"MatrixReshape"],[8,"MatrixSlice"],[8,"MatrixAssign"],[8,"MatrixMultiply"],[8,"MatrixHStack"],[8,"MatrixVStack"],[8,"MatrixElems"],[8,"ToMatrix"],[3,"Transposer"],[3,"View"],[3,"RowAccessor"],[3,"ColumnAccessor"],[3,"MatrixElements"],[3,"HStack"],[3,"MatrixMul"],[8,"BinOp"],[3,"OpAdd"],[3,"OpSub"],[3,"OpDiv"],[3,"OpMul"],[3,"MatrixBinOp"],[8,"MatrixIndexGet"],[8,"MatrixIndexSet"],[8,"UnOp"],[3,"OpNeg"],[3,"MatrixUnOp"],[8,"Inv"],[8,"MatrixAbsOp"],[8,"MatrixAcosOp"],[8,"MatrixAsinOp"],[8,"MatrixAtanOp"],[8,"MatrixCeilOp"],[8,"MatrixCosOp"],[8,"MatrixCoshOp"],[8,"MatrixExpOp"],[8,"MatrixFloorOp"],[8,"MatrixLnOp"],[8,"MatrixLog10Op"],[8,"MatrixRoundOp"],[8,"MatrixSinOp"],[8,"MatrixSinhOp"],[8,"MatrixSqrtOp"],[8,"MatrixTanOp"],[8,"MatrixTanhOp"],[8,"MatrixInvOp"],[3,"AbsOp"],[3,"AcosOp"],[3,"AsinOp"],[3,"AtanOp"],[3,"CeilOp"],[3,"CosOp"],[3,"CoshOp"],[3,"ExpOp"],[3,"FloorOp"],[3,"LnOp"],[3,"Log10Op"],[3,"RoundOp"],[3,"SinOp"],[3,"SinhOp"],[3,"SqrtOp"],[3,"TanOp"],[3,"TanhOp"],[3,"InvOp"],[3,"VStack"],[8,"MatrixReduce"],[3,"Reshape"],[3,"Slice"]]};
initSearch(searchIndex);
