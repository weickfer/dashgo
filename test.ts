// type Mapper<T, V> = {
//   [P in keyof T]: V
// }

// interface Yup {
//   object(): this
//   shape<T>(schema: Mapper<T, this>): this
//   required(message?: string): this
//   email(message?: string): this
//   string(message?: string): this
//   min(value?: number, message?: string): this
//   max(value?: number, message?: string): this
// }

// let yup: Yup

// type SchemaType = {
//   email: string
//   password: string
// }

// const schema = yup.object().shape<SchemaType>({
//   email: yup.string().email(),
//   password: yup.string().min(8)
// })

// type AxiosArgs = [data: string, config?: {
//   headers?: Record<string, string>
// }]

// type Axios = (...args: AxiosArgs) => void

// let axios: Axios

