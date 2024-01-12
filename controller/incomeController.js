const db = require('../dbconnect/dbconn');

exports.index = async (req,res,next)=>{
    // db.query(
    //     'SELECT * FROM tbl_user',(err,result)=>{res.json(result)}
    //    )

     db.query(
        'SELECT * FROM tbl_income',(err,result)=>{
            res.status(200).json(result)
        }
       )
       
}

exports.insertData = async (req,res,next)=>{
    const { text,amount } = req.body;
    console.log(text)
    console.log(amount)
    db.query(
        `INSERT INTO tbl_income (text, amount) VALUES (?, ?)`,
        [text, amount],
        (err, result) => {
            if (err) {
                console.error('Error inserting data:', err);
                res.status(500).json({
                    message: "ไม่สามารถเพิ่มข้อมูลได้",
                });
            } else {
                res.status(200).json({
                    message: "เพิ่มข้อมูลเรียบร้อย",
                });
            }
        }
    );
    
}

exports.delete = async(req,res,next)=>{
    try {
        const {id} = req.params
        console.log(req.params.id)
        db.query(`DELETE FROM tbl_income WHERE id=${id};`)
        res.status(200).json({
            message:`ลบข้อมูลร้านค้า ${id} สำเร็จ`
        })
    } catch (error) {
        res.status(400).json({
            error:{
              message: 'เกิดข้อผิดพลาด' + error.message , 
            }
        });
    }
}