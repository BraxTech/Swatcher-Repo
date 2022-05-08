export const SWATCHER_API = 'mongodb+srv://testUser:B0L66tbASWWCrvl2@cluster0.q9o0b.mongodb.net/Swatcher?retryWrites=true&w=majority'

export const GET_COLORS_QUERY=
`
query{
    getColors {
      color_name
      hexcode
    }
  }
`