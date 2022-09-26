import { sewing } from "../../../utilities/images";

const reseauxURL = "https://i.ibb.co/FgjKb82/reseaux-security.png";

const graphicDesign = "https://i.ibb.co/t8x4gyy/graphic-design.png";

const languages = "https://i.ibb.co/f4Zc8gh/languages.png";

const imageStyle = {
    marginTop: "40px",
    marginBottom: "20px",
    alignSelf: "center"
};

const cardItems = [
    {
        id: 0,
        image: (
            <img
                src={sewing}
                height="70px"
                width="70px"
                alt="sewing"
                style={imageStyle}
            />
        ),
        title: "الخياطة والطرز",
        body:
            "دورات متنوعة في تعلم الخياطة وتفصيل الملابس وأخذ المقاسات وطرق اخرى متعلقة في فن الخياطة  "
    },
    {
        id: 1,
        image: (
            <img
                src={reseauxURL}
                height="70px"
                width="70px"
                alt="sewing"
                style={imageStyle}
            />
        ),
        title: "الصيانة وتركيب الشبكات",
        body:
            "الحلول المقترحة والمنفذة موثوقة ومثبتة للسماح لعملائنا بالاستفادة الكاملة من معداتهم دون التعرض لأي إزعاج."
    },
    {
        id: 2,
        image: (
            <img
                src={graphicDesign}
                height="70px"
                width="70px"
                alt="sewing"
                style={imageStyle}
            />
        ),
        title: "التصميم والجرافيك",
        body:
            "إبداعات الجرافيك كل الوسائط! إنشاء الشعارات ، صور الإعلانات ، صفحات الغلاف ، الفيديو (مقدمة ، خاتمة ، إعلان ، عرض توضيحي ، تعليمي ...إلخ) "
    },
    {
        id: 3,
        image: (
            <img
                src={languages}
                height="70px"
                width="70px"
                alt="sewing"
                style={imageStyle}
            />
        ),
        title: "تعلم اللغات",
        body:
            "هلْ فكّرت في الشروعِ بتعلُّمِ لغات جديدة؟ ... نقترح عليك عروض تلبي كافة المستويات والتخصصات"
    }
];

export default cardItems;
