/* eslint-disable */
import type { NextApiRequest, NextApiResponse } from 'next'
import { LoginResponseTypes } from '@/features/auth'

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<LoginResponseTypes>
): void {
  if (req.method === 'POST') {
    setTimeout(() => {
      res.status(200).json({ user: { email: req.body.email, name: 'Max', id: '123' } })
    }, 2000)
  }
}
