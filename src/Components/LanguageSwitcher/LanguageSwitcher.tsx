
import { ArrowDropDown } from '@mui/icons-material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { useTranslation,  } from 'react-i18next';

const lngs = {
    en: { nativeName: 'eng | USD' },
    ar: { nativeName: 'ar | EGY'  }
  };

const LanguageSwitcher = () => {
    const {  i18n } = useTranslation();
    const handleChange =(e:any)=>{
        i18n.changeLanguage(e.target.value)
    }

  return (
    <Select
      value={i18n.language}
      onChange={handleChange}
      className="border-2 border-white p-1  outline-white rounded-lg h-8 w-full"
      style={{color:"white" ,outline:"none" }}
      IconComponent={ArrowDropDown}
      
    >
    {
        Object.keys(lngs).map((lng)=> <MenuItem value={lng} key={lng} >{lngs[lng].nativeName}</MenuItem>)
   }
    </Select>
  )
}

export default LanguageSwitcher