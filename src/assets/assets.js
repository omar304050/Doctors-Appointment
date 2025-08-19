import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'
import doc11 from './doc11.png'
import doc12 from './doc12.png'
import doc13 from './doc13.png'
import doc14 from './doc14.png'
import doc15 from './doc15.png'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
  {
    speciality: 'specialities.general_physician',
    image: General_physician,
  
  },
  {
    speciality: 'specialities.gynecologist',
    image: Gynecologist
  },
  {
    speciality: 'specialities.dermatologist',
    image: Dermatologist
  },
  {
    speciality: 'specialities.pediatricians',
    image: Pediatricians
  },
  {
    speciality: 'specialities.neurologist',
    image: Neurologist
  },
  {
    speciality: 'specialities.gastroenterologist',
    image: Gastroenterologist
  },
];

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Richard James',
    image: doc1,
    speciality: 'specialities.general_physician',
    degree: 'MBBS',
    experience: 'experience.4_years',
    about: 'about.general',
    fees: 50,
    address: {
      line1: 'address.17_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Emily Larson',
    image: doc2,
    speciality: 'specialities.gynecologist',
    degree: 'MBBS',
    experience: 'experience.3_years',
    about: 'about.general',
    fees: 60,
    address: {
      line1: 'address.27_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Sarah Patel',
    image: doc3,
    speciality: 'specialities.dermatologist',
    degree: 'MBBS',
    experience: 'experience.1_year',
    about: 'about.general',
    fees: 30,
    address: {
      line1: 'address.37_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Christopher Lee',
    image: doc4,
    speciality: 'specialities.pediatricians',
    degree: 'MBBS',
    experience: 'experience.2_years',
    about: 'about.general',
    fees: 40,
    address: {
      line1: 'address.47_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Jennifer Garcia',
    image: doc5,
    speciality: 'specialities.neurologist',
    degree: 'MBBS',
    experience: 'experience.4_years',
    about: 'about.general',
    fees: 50,
    address: {
      line1: 'address.57_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc6',
    name: 'Dr. Andrew Williams',
    image: doc6,
    speciality: 'specialities.neurologist',
    degree: 'MBBS',
    experience: 'experience.4_years',
    about: 'about.general',
    fees: 50,
    address: {
      line1: 'address.57_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc7',
    name: 'Dr. Christopher Davis',
    image: doc7,
    speciality: 'specialities.general_physician',
    degree: 'MBBS',
    experience: 'experience.4_years',
    about: 'about.general',
    fees: 50,
    address: {
      line1: 'address.17_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc8',
    name: 'Dr. Timothy White',
    image: doc8,
    speciality: 'specialities.gynecologist',
    degree: 'MBBS',
    experience: 'experience.3_years',
    about: 'about.general',
    fees: 60,
    address: {
      line1: 'address.27_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc9',
    name: 'Dr. Ava Mitchell',
    image: doc9,
    speciality: 'specialities.dermatologist',
    degree: 'MBBS',
    experience: 'experience.1_year',
    about: 'about.general',
    fees: 30,
    address: {
      line1: 'address.37_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc10',
    name: 'Dr. Jeffrey King',
    image: doc10,
    speciality: 'specialities.pediatricians',
    degree: 'MBBS',
    experience: 'experience.2_years',
    about: 'about.general',
    fees: 40,
    address: {
      line1: 'address.47_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc11',
    name: 'Dr. Zoe Kelly',
    image: doc11,
    speciality: 'specialities.neurologist',
    degree: 'MBBS',
    experience: 'experience.4_years',
    about: 'about.general',
    fees: 50,
    address: {
      line1: 'address.57_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc12',
    name: 'Dr. Patrick Harris',
    image: doc12,
    speciality: 'specialities.neurologist',
    degree: 'MBBS',
    experience: 'experience.4_years',
    about: 'about.general',
    fees: 50,
    address: {
      line1: 'address.57_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc13',
    name: 'Dr. Chloe Evans',
    image: doc13,
    speciality: 'specialities.general_physician',
    degree: 'MBBS',
    experience: 'experience.4_years',
    about: 'about.general',
    fees: 50,
    address: {
      line1: 'address.17_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc14',
    name: 'Dr. Ryan Martinez',
    image: doc14,
    speciality: 'specialities.gynecologist',
    degree: 'MBBS',
    experience: 'experience.3_years',
    about: 'about.general',
    fees: 60,
    address: {
      line1: 'address.27_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  },
  {
    _id: 'doc15',
    name: 'Dr. Amelia Hill',
    image: doc15,
    speciality: 'specialities.dermatologist',
    degree: 'MBBS',
    experience: 'experience.1_year',
    about: 'about.general',
    fees: 30,
    address: {
      line1: 'address.37_cross_richmond',
      line2: 'address.circle_ring_london'
    }
  } 
];
