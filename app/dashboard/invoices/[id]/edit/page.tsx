import Form from '@/app/ui/invoices/edit-form';
import Breadcrumbs from '@/app/ui/invoices/breadcrumbs';
import { fetchInvoiceById, fetchCustomers } from '@/app/lib/data'
import NotFound from './not-found';

export async function Edit({params}:{params:{id:string}}) {


  const [invoice,customers]=await Promise.all([fetchInvoiceById(params.id),fetchCustomers()]);
  
  if(!invoice){
    return <NotFound />
  }
  return (
    <main>
    <Breadcrumbs
      breadcrumbs={[
        { label: 'Invoices', href: '/dashboard/invoices' },
        {
          label: 'Edit Invoice',
          href: `/dashboard/invoices/${params.id}/edit`,
          active: true,
        },
      ]}
    />
    <Form invoice={invoice} customers={customers} />
  </main>
  )
}

export default Edit