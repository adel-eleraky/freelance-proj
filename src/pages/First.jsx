import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import "./first.css"

const First = () => {

  const navigate = useNavigate()
  const redirect = () => {
navigate('home')
window.scrollTo(0, 0);

  }

  return (
    <div dir="rtl" className="bg-light text-dark" style={{ fontFamily: 'Cairo, sans-serif' }} onClick={redirect}>
      {/* Header */}
      <header className="bg-purple text-white py-4 text-center" style={{ backgroundColor: '#6f42c1' }}>
        <h1 className="h3 fw-bold">للرجال المتزوجون ارجـع عريس من جديد</h1>
      </header>

      {/* Main Content */}
      <div className="row">
        <div className="col-12 col-md-6">
          <img src="img/doctor.png" alt="cdcd" className="img-fluid" style={{ width: '100%' }} />
        </div>
        <div className="col-12 col-md-6">
          <section className="bg-white rounded-lg shadow-md p-5 fs-1">
            <p className="mb-4 fw-bold fs-1">للرجال المتزوجون ارجـع عريس من جديد</p>
            <p className="mb-4">نفسك فى انتصاب أيام الشباب ويملى عينها ويمتعها</p>
            <p className="mb-4">معاكم دكتوره صفاء</p>
            <p className="mb-4">للرجال المتزوجون ارجـع عريس من جديد</p>
            <p className="mb-4">زهقت من البرشام الى أضراره اكتر من فوايده</p>
            <p className="mb-4">جربت حاجات كتير ولسه انتصابك ضعيف</p>
            <p className="mb-4">شكلك وحش قدام مراتك من كتر الفشل وعاوز تبقا عنتيل على السرير وتستعيد شبابـك</p>
            <p className="mb-4">من الطبيعي مع تقدم عمـرك اول حاجه بتؤثـر عليك هـي ضعف الانتصاب</p>
            <p className="mb-4">…ودايما هتلاقـي صعوبه فالانتصاب حتي لو بعد مداعبـه كتير</p>
            <p className="mb-4">وحتي لو انتصب بصعوبه بيكون مرخي معاك جدا ومش بتقدر تقوم بواجباتـك</p>
            <p className="mb-4">!! وبقيت دايما تهـرب من القعده فالبيت وع طول يا فالشغل يا على القهــوه</p>
            <p className="mb-4">مـع تقدم الطب البديل اصبـح العلاج متوفـر حاليـا علاج نهائي مش مجرد علاج مؤقـت</p>
            <p className="mb-4">ومن غير متدفع كتير وكمان أمن على مرضى السكر والضغط والقلب</p>
            <p className="mb-4">مناسب لجميع الاعمار يعنى لو سنك صغير وخايف من البرشام بس نفسك فى حاجه</p>
            <p className="mb-4">ولو انت كبرت وحاسس ان خلاص العمر عدى ونسيت العلاقه الجنسيه</p>
            <p className="mb-4">حلك كمان هنا هترجع شباب من جديد بانتصاب حديد يكمل معاك طول الليل</p>
            <p className="mb-4">وهتبهرها وتستعيد رجولتـك من جديد وصوتها هيجيب اخر الشقـة</p>
            <p className="mb-4">وكل ده مرخص من وزاره الصحه المصريه</p>
            <p className="mb-4">%100 ومن غير برشام ازرق ولا احمر احنا الحل عندنا طبيعى لو وصلت لحد هنا يبقا انت كده تستاهل كل المميزات دى</p>
            <p className="mb-4">” الحل هو” درافــون شاب وزيوت طبيعيه بنسب دقيقه</p>
            <p className="mb-4">لتحقيق اقصي استفاده</p>
            <p className="mb-4">أمن على مرضى السكر والضغط والقلب</p>
            <p className="mb-4">مالوش اى اعراض جانبيه</p>
            <p className="mb-4">بيوصلك للمستوى المطلوب من اول استعمال</p>
            <p className="mb-4">بمجرد اول دهنـه منـه هتلاقي أنتصابـك بقي فولاذي</p>
            <p className="mb-4">وبعد شهـر من استخدامـه هتختفي عندك المشكله تماما</p>
            <p className="mb-4">لانـه حل نهائي للمشكلـه وخليـك دايمـا أسـد في بيتـك وودع أي حلول تانيـه مؤقتـة</p>
            <p className="mb-4">سجل اسمك ورقم تلفونك من هنا وفى متخصص هيكلمك يشرحلك كل حاجه مجانا هيعرفك طريقه الاستخدام ويعرفك الموصفات وكل حاجه عاوز تعرفها اسال عنها هتلاقى اجابه</p>
            <p className="mb-4">مستنى ايه سجل دلوقتى من خلال الموقع ده واحصل على خصم %40</p>
            <p className="mb-4">بسعـــر 390 جنية و بس</p>

            <div className="order-btn-wrapper">
              <Link to="home" className="order-btn d-block mx-auto">
                سجل الآن
              </Link>
              <div className="order-btn-subtext mx-auto">
                لمعرفة السعر و التفاصيل
              </div>
            </div>
          </section>

        </div>

      </div>


      {/* Footer */}
      {/* <footer className="bg-dark text-white py-3 text-center">
        <small>© 2023 marcroto.shop. جميع الحقوق محفوظة.</small>
      </footer> */}
    </div>
  );
};

export default First;
