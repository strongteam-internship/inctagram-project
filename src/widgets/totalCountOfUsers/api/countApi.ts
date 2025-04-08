export async function getTotalUsersCount(): Promise<{ totalCount: string[] }> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/v1/public-user`, {
    cache: 'force-cache',
    next: { revalidate: 3600 },
  })
  const data = await response.json()

  return {
    ...data,
    totalCount: ['0', '0', ...String(data.totalCount).split('')],
  }
}
