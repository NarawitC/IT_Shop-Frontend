import {
  ClockIcon,
  ShieldIcon,
  DeliveryIcon,
  CertificateIcon,
} from '../icon/icon';
function ProductFacility() {
  const rows = [
    { icon: ClockIcon, text: 'Installment 0% 10 months' },
    { icon: ShieldIcon, text: 'Warranty according to the product' },
    {
      icon: DeliveryIcon,
      text: 'FREE SHIPPING! for a minimum online order of 1000 baht',
    },
    { icon: CertificateIcon, text: 'Official distributor' },
  ];
  return (
    <div className="bg-light font-size-12 p-2" style={{ width: '250px' }}>
      <div className="d-flex  gap-2">
        <ClockIcon className={'font-text2 font-size-12'}></ClockIcon>
        <div className="font-text2">Installment 0% 10 months</div>
      </div>
      <div className="d-flex  gap-2">
        <ShieldIcon className={'font-text2 font-size-12'}></ShieldIcon>
        <div className="font-text2">Warranty according to the product</div>
      </div>
      <div className="d-flex  gap-2">
        <DeliveryIcon className={'font-text2 font-size-12'}></DeliveryIcon>
        <div className="font-text2">
          FREE SHIPPING! for a minimum online order of 1000 baht
        </div>
      </div>
      <div className="d-flex  gap-2">
        <CertificateIcon
          className={'font-text2 font-size-12'}
        ></CertificateIcon>
        <div className="font-text2">Official distributor</div>
      </div>
    </div>
  );
}

export default ProductFacility;
