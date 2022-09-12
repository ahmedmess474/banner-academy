let style = {
    marginLeft: "10px",
    cursor: "pointer"
};

let secondIcon = <i className="fas fa-arrow-down" style={{marginRight: "7px"}}></i>;
let iconStyle={marginLeft:"7px"};
let className = "nav-item active"

const navItems = [
    {
        id:0 , 
        name:"الرئيسية", 
        icon: <i className="fa fa-university" aria-hidden="true" style={iconStyle}></i>,
        className,
        style:style
    },
    {
        id:1 , 
        name:"دورات مميزة", 
        icon: <i className="fa fa-handshake" aria-hidden="true" style={iconStyle}></i>,
        className,
        style:style
    },
    {
        id:2 , 
        name:"دروس الدعم", 
        icon: <i className="fa fa-users" aria-hidden="true" style={iconStyle}></i>,
        className,
        style:style
    },
    {
        id:3 , 
        name:"فضاء الأساتذة", 
        icon: <i className="fa fa-address-card" aria-hidden="true" style={iconStyle}></i>,
        className,
        style:style
    },
    {
        id:4 , 
        name:"إتصل بنا", 
        icon: <i className="fa fa-envelope" aria-hidden="true" style={iconStyle}></i>,
        className,
        style:style
    },
];

export default navItems;