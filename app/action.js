'use server'
 
import { redirect } from 'next/navigation'
import { revalidatePath } from 'next/cache'
 
export default async function submit(formData) {
    
  const id = formData.get('airport')
//   console.log(id)
  revalidatePath(`/${id}`)
  redirect(`/${id}`) // Navigate to new route
}
