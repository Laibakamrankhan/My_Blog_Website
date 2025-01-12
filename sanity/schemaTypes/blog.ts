export const blog = {
    name: 'blog',
    title: 'Blog',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        description: 'Enter the blog title'
      },
      {
        name: 'category',
        title: 'Category',
        type: 'string',
        description: 'Enter the blog category',
    },

    { name: 'description',
    title: 'Description',
    type: 'text',
    description: 'Write a brief description of the blog'
   },
   {
    name: 'image',
    title: 'Image',
    type: 'image',
    description: 'Upload an image for the blog',}
    ,
    {
        name: 'blogdescription',
        type: 'array',
        title: 'Blog Description',
        of: [
          {
            type: 'block'
          }
        ]
        
      },
      {
        title: 'Slug',
        name: 'slug',
        type: 'slug',
        options: {
          source: 'title',
          maxLength: 200, 
          slugify: (input: string) => input
                               .toLowerCase()
                               .replace(/\s+/g, '-')
                               .slice(0, 200)
        }
      }
   
    ]
    
}