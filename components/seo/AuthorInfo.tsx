import { AuthorInfo, ReviewerInfo } from '@/lib/structured-data'

interface AuthorInfoProps {
  author?: AuthorInfo
  reviewer?: ReviewerInfo
  lastReviewed?: string
  lastUpdated?: string
}

export default function AuthorInfoComponent({ 
  author, 
  reviewer, 
  lastReviewed, 
  lastUpdated 
}: AuthorInfoProps) {
  if (!author && !reviewer && !lastReviewed && !lastUpdated) {
    return null
  }

  return (
    <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 my-8">
      <div className="space-y-4">
        {author && (
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
              Author
            </p>
            <p className="text-base text-gray-900 font-medium">
              {author.name}
              {author.credentials && (
                <span className="text-gray-600 ml-2">({author.credentials})</span>
              )}
            </p>
          </div>
        )}

        {reviewer && (
          <div>
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
              Reviewed By
            </p>
            <p className="text-base text-gray-900 font-medium">
              {reviewer.name}
              {reviewer.credentials && (
                <span className="text-gray-600 ml-2">({reviewer.credentials})</span>
              )}
            </p>
          </div>
        )}

        {(lastReviewed || lastUpdated) && (
          <div className="pt-4 border-t border-gray-200">
            {lastReviewed && (
              <p className="text-sm text-gray-600">
                Last reviewed: <span className="font-medium">{lastReviewed}</span>
              </p>
            )}
            {lastUpdated && (
              <p className="text-sm text-gray-600">
                Last updated: <span className="font-medium">{lastUpdated}</span>
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
