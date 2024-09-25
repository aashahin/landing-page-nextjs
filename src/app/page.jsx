import { Button } from "@/_components/Button"
import { DetailsIcon } from "@/_components/DetailsIcon"
import { CreditCard, InstagramIcon, TwitterIcon, YoutubeIcon } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Page() {
    return (
        <>
            <header className="mx-4 md:mx-24 my-12 flex gap-8 justify-between">
                <Image src={'/assets/logo.svg'} width={96} height={96} alt="g" />

                <div className="flex gap-x-2 md:gap-x-6">
                    <Button text={"إنضم كمورد"} variant={"outline"} />
                    <Button text={"طلب تسعيرة"} variant={"primary"} />
                </div>

            </header>
            <div className="flex flex-col items-center gap-8 mt-24 px-4 md:px-0">
                <Image src={'/assets/shopping_boxes.png'} width={420} height={420} alt="ff" />
                <h1 className="text-4xl font-bold">تسوق الاف المنتجات واستوردها بكل سهولة</h1>
                <h3 className="text-2xl text-stone-600 font-bold ">نوفر لك منتجات الجملة لمتجرك ومحلك</h3>


                <div className="flex flex-col md:flex-row gap-10 mt-8">
                    <DetailsIcon iconName={"Gift"} text="العطور والهدايا" />
                    <DetailsIcon iconName={"WashingMachine"} text="كهربا" />
                    <DetailsIcon iconName={"Baby"} text="طفل" />
                    <DetailsIcon iconName={"CookingPot"} text="ست" />
                    <DetailsIcon iconName={"ShirtIcon"} text="قميص" />
                </div>

            </div>

            <div className="bg-gray-100 py-10 flex flex-col items-center mt-20">
                <h1 className="text-4xl font-bold">
                    علامات تجارية تثق بنا
                </h1>
                <div className="mt-14 grid grid-cols-2 md:grid-cols-5 gap-4">
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/1.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/2.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/3.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/4.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/1.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/2.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/3.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/4.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/2.svg'} width={180} height={180} />
                    </div>
                    <div className="bg-white rounded-[40px] p-8 flex align-middle">
                        <Image src={'/assets/icons/4.svg'} width={180} height={180} />
                    </div>

                </div>
            </div>

            <div className="bg-white h-64 w-full" />

            <footer className="bg-black p-20 text-white flex flex-col items-center gap-20 relative">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-5 py-20 px-32 mx-auto w-full md:w-[60%] bg-gradient-to-r from-teal-600 to-yellow-200 rounded-2xl ">
                    <h1 className="font-bold text-2xl md:text-7xl text-white ">اطلب منتجك</h1>
                    <h3 className=" text-xl md:text-4xl font-bold text-white">من الاف المنتجات</h3>
                    <Button className={'text-xl md:text-3xl'} text={'اطلب تسعيرة الان'} variant={'primary'} />
                </div>

                <div className="mt-40 w-full md:w-1/3 flex flex-col gap-6 items-center">
                    <Image src={'/assets/logo.svg'} width={164} height={164} alt="fdf" />
                    <p className="text-xl">لقد من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
                </div>

                <div className="flex flex-col items-center md:flex-row md:justify-between w-full md:w-2/3">
                    <Link className="text-2xl" href="#">اعرف المزيد عنا</Link>
                    <Link className="text-2xl" href="#">انضم كمورد</Link>
                    <Link className="text-2xl" href="#">اتصل بنا</Link>
                </div>

                <div className="flex flex-col gap-2 md:flex-row md:justify-between items-center w-full md:w-2/3">
                    <div className="flex gap-4">
                        <CreditCard className="w-8 h-8" />
                        <CreditCard className="w-8 h-8" />
                        <CreditCard className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl">جميع الحقوق محفوظة لدي محمد رمضان</h3>
                    <div className="flex gap-4">
                        <InstagramIcon className="w-8 h-8" />
                        <TwitterIcon className="w-8 h-8" />
                        <YoutubeIcon className="w-8 h-8" />
                    </div>
                </div>
            </footer>

        </>
    )
}