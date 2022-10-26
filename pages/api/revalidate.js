// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const handler = async (req, res) => {
  await res.revalidate("/blog")

  return res.send({revalidated: true})
}

export default handler