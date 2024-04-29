import PageMeta from '@/components/PageMeta';

import SignInExperienceTabWrapper from '../components/SignInExperienceTabWrapper';

import BrandingForm from './BrandingForm';
import CustomCssForm from './CustomCssForm';

type Props = {
  readonly isActive: boolean;
};

function Branding({ isActive }: Props) {
  return (
    <SignInExperienceTabWrapper isActive={isActive}>
      {isActive && <PageMeta titleKey={['sign_in_exp.tabs.branding', 'sign_in_exp.page_title']} />}
      <BrandingForm />
      <CustomCssForm />
    </SignInExperienceTabWrapper>
  );
}

export default Branding;
