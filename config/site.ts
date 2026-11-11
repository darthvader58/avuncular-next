/** Shared company details. Update contact information here to keep all pages consistent. */
export const siteConfig = {
    company: { name: 'Avuncular Consultancy Private Limited', cin: 'U74999DL2017PTC324494' },
    contact: {
        phone: '+91 93129 81021', phoneHref: 'tel:+919312981021',
        email: 'info@avuncular.in', emailHref: 'mailto:info@avuncular.in',
        whatsappHref: 'https://wa.me/919312981021',
    },
    address: {
        street: '2, Block P, 23, South Extension', city: 'New Delhi, Delhi 110049',
        full: '2, Block P, 23, South Extension, New Delhi, Delhi 110049',
        mapsHref: 'https://maps.google.com/?q=2%2C+Block+P%2C+23%2C+South+Extension%2C+New+Delhi+110049',
    },
    hours: { days: 'Monday to Saturday', time: '10:00 am to 7:00 pm', summary: 'Monday to Saturday, 10 am to 7 pm' },
} as const;
