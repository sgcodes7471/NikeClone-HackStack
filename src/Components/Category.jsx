const Category = ()=>{
    const categories=['Shoes' , 'Hoodies & Pullovers' , 'Jackets & Vests' , 'Pants & Tights' , 'Tops & T-shirt' , 'Jerseys' , 'Shorts' , 'Tights & Leggings' , 'Sports Bras' , 'Compressions & Baselayer' , 'Tracksuits' , 'Swimwears' , 'Socks' , 'Accessories & Equipments']
    return(
        <>
        {categories.map((item, index)=>{
            return(
                <p style={{fontSize:'1.1rem',padding:'10px 0px',cursor:'pointer'}} key={index}>{item}</p>
            )
        })}
        </>
    )
}
export default Category