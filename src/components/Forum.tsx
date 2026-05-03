import React, { useState } from 'react';

const styles = `
  .forum-section {
    max-width: 1440px;
    margin: 0 auto;
    padding: 4rem 2rem;
    background-color: #f5f5f7;
  }

  .forum-header {
    text-align: center;
    margin-bottom: 3rem;
  }

  .forum-header h2 {
    font-size: 2rem;
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: #1a1a1b;
  }

  .forum-header p {
    font-size: 1rem;
    color: #a9a9a9;
  }

  .forum-tabs {
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;
    border-bottom: 2px solid #e0e0e0;
    flex-wrap: wrap;
  }

  .forum-tab {
    padding: 1rem 1.5rem;
    background: none;
    border: none;
    border-bottom: 3px solid transparent;
    font-size: 0.95rem;
    font-weight: 600;
    color: #a9a9a9;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.2s ease;
  }

  .forum-tab.active {
    color: #0047ab;
    border-bottom-color: #0047ab;
  }

  .forum-tab:hover {
    color: #0047ab;
  }

  .forum-threads {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }

  .thread-item {
    background-color: white;
    border: 1px solid #e0e0e0;
    padding: 1.5rem;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .thread-item:hover {
    border-color: #0047ab;
    box-shadow: 0 4px 12px rgba(0, 71, 171, 0.1);
    transform: translateX(4px);
  }

  .thread-content {
    flex: 1;
  }

  .thread-title {
    font-size: 1.1rem;
    margin-bottom: 0.5rem;
    text-transform: uppercase;
    letter-spacing: 0.03em;
    color: #1a1a1b;
  }

  .thread-preview {
    font-size: 0.95rem;
    color: #a9a9a9;
    line-height: 1.6;
    margin-bottom: 0.5rem;
  }

  .thread-meta {
    display: flex;
    gap: 1.5rem;
    font-size: 0.85rem;
    color: #a9a9a9;
    flex-wrap: wrap;
  }

  .author-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.3rem;
    padding: 2px 0.5rem;
    border-radius: 3px;
    font-size: 0.75rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  .master-plumber {
    background-color: #0047ab;
    color: white;
  }

  .journeyman {
    background-color: #a9a9a9;
    color: white;
  }

  .apprentice {
    background-color: #e0e0e0;
    color: #1a1a1b;
  }

  .thread-stats {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.5rem;
    text-align: right;
    min-width: 80px;
  }

  .reply-count {
    font-size: 1.2rem;
    font-weight: 700;
    color: #0047ab;
  }

  .view-count {
    font-size: 0.8rem;
    color: #a9a9a9;
  }

  .create-thread-btn {
    background-color: #0047ab;
    color: white;
    padding: 1rem 2rem;
    border: none;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 71, 171, 0.2);
    margin-bottom: 2rem;
  }

  .create-thread-btn:hover {
    background-color: #1a1a1b;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(0, 71, 171, 0.3);
  }

  /* Thread Detail Modal Styles */
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: flex-start;
    justify-content: center;
    z-index: 1000;
    overflow-y: auto;
    padding: 2rem 1rem;
  }

  .modal-content {
    background-color: white;
    width: 100%;
    max-width: 800px;
    border-radius: 4px;
    margin: 2rem auto;
  }

  .modal-header {
    padding: 2rem;
    border-bottom: 1px solid #e0e0e0;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }

  .modal-title {
    font-size: 1.5rem;
    color: #1a1a1b;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    margin: 0;
  }

  .modal-close {
    background: none;
    border: none;
    font-size: 2rem;
    cursor: pointer;
    color: #a9a9a9;
    padding: 0;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .modal-close:hover {
    color: #1a1a1b;
  }

  .modal-body {
    padding: 2rem;
    max-height: 60vh;
    overflow-y: auto;
  }

  .replies-section {
    margin-top: 2rem;
  }

  .reply-item {
    background-color: #f5f5f7;
    padding: 1.5rem;
    margin-bottom: 1rem;
    border-left: 4px solid #0047ab;
  }

  .reply-author {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #1a1a1b;
  }

  .reply-time {
    font-size: 0.8rem;
    color: #a9a9a9;
  }

  .reply-text {
    color: #1a1a1b;
    line-height: 1.6;
    margin-top: 0.5rem;
  }

  .reply-form {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid #e0e0e0;
  }

  .form-group {
    margin-bottom: 1rem;
  }

  .form-label {
    display: block;
    margin-bottom: 0.5rem;
    font-weight: 600;
    color: #1a1a1b;
    text-transform: uppercase;
    font-size: 0.85rem;
    letter-spacing: 0.05em;
  }

  .form-input, .form-textarea {
    width: 100%;
    padding: 0.75rem;
    border: 1px solid #e0e0e0;
    font-family: inherit;
    font-size: 0.95rem;
    color: #1a1a1b;
    box-sizing: border-box;
  }

  .form-input:focus, .form-textarea:focus {
    outline: none;
    border-color: #0047ab;
    box-shadow: 0 0 0 3px rgba(0, 71, 171, 0.1);
  }

  .form-textarea {
    min-height: 100px;
    resize: vertical;
  }

  .form-submit {
    background-color: #0047ab;
    color: white;
    padding: 0.75rem 1.5rem;
    border: none;
    font-size: 0.95rem;
    font-weight: 600;
    cursor: pointer;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    transition: all 0.3s ease;
  }

  .form-submit:hover {
    background-color: #1a1a1b;
  }

  /* Mobile Styles */
  @media (max-width: 768px) {
    .forum-section {
      padding: 2rem 1rem;
    }

    .forum-header h2 {
      font-size: 1.5rem;
    }

    .forum-tabs {
      gap: 0.5rem;
    }

    .forum-tab {
      padding: 0.75rem 0.5rem;
      font-size: 0.8rem;
      flex: 1;
    }

    .thread-item {
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
    }

    .thread-stats {
      align-items: flex-start;
      text-align: left;
      min-width: auto;
    }

    .create-thread-btn {
      width: 100%;
    }

    .modal-overlay {
      padding: 1rem;
    }

    .modal-header {
      padding: 1.5rem;
    }

    .modal-title {
      font-size: 1.2rem;
    }

    .modal-body {
      padding: 1.5rem;
      max-height: 70vh;
    }

    .reply-item {
      padding: 1rem;
    }

    .form-group {
      margin-bottom: 0.75rem;
    }

    .form-label {
      font-size: 0.8rem;
    }

    .form-input, .form-textarea {
      padding: 0.6rem;
      font-size: 0.9rem;
    }

    .form-textarea {
      min-height: 80px;
    }

    .form-submit {
      width: 100%;
      padding: 0.6rem 1rem;
    }
  }
`;

interface ForumThread {
  id: string;
  title: string;
  preview: string;
  fullContent?: string;
  authorName: string;
  authorTier: 'master' | 'journeyman' | 'apprentice';
  category: string;
  replies: number;
  views: number;
  lastActivity: string;
  replyList?: ForumReply[];
}

interface ForumReply {
  id: string;
  authorName: string;
  authorTier: 'master' | 'journeyman' | 'apprentice';
  content: string;
  timestamp: string;
}

const initialThreads: ForumThread[] = [
  {
    id: 'thread-001',
    title: 'PSI Calculation Methods for Complex Manifold Systems',
    preview: 'Discussion on advanced pressure loss calculations in multi-branch industrial plumbing systems...',
    fullContent: 'How do you calculate PSI loss in complex manifold systems? Need guidance on pressure calculations for multi-branch industrial configurations.',
    authorName: 'Thomas Bradley',
    authorTier: 'master',
    category: 'Industrial Design',
    replies: 23,
    views: 847,
    lastActivity: '2 hours ago',
    replyList: [
      {
        id: 'reply-001',
        authorName: 'Thomas Bradley',
        authorTier: 'master',
        content: 'Using Darcy-Weisbach equation with friction factor adjustments. Standard methodology...',
        timestamp: '2 hours ago',
      },
    ],
  },
  {
    id: 'thread-002',
    title: 'IPC 2021 Compliance for Residential Retrofit Projects',
    preview: 'Navigating code requirements for existing home water system upgrades...',
    fullContent: 'What are the key compliance requirements for IPC 2021 in residential retrofit projects?',
    authorName: 'Alexandra Morgan',
    authorTier: 'journeyman',
    category: 'Code Compliance',
    replies: 15,
    views: 562,
    lastActivity: '4 hours ago',
    replyList: [],
  },
  {
    id: 'thread-003',
    title: 'Copper vs. PEX: Material Selection Criteria',
    preview: 'Comprehensive comparison for different application contexts...',
    fullContent: 'What are the pros and cons of copper versus PEX tubing in different scenarios?',
    authorName: 'Marcus Thompson',
    authorTier: 'master',
    category: 'Materials',
    replies: 34,
    views: 1203,
    lastActivity: '6 hours ago',
    replyList: [],
  },
  {
    id: 'thread-004',
    title: 'Emergency Response: Burst Line Mitigation Protocols',
    preview: 'Best practices for rapid assessment and temporary/permanent repairs...',
    fullContent: 'What are the best protocols for responding to burst water lines?',
    authorName: 'Robert Chen',
    authorTier: 'journeyman',
    category: 'Emergency Response',
    replies: 8,
    views: 421,
    lastActivity: '12 hours ago',
    replyList: [],
  },
  {
    id: 'thread-005',
    title: 'Scaling Prevention: Chemical vs. Physical Methods',
    preview: 'Debate on descaling techniques for hard water systems...',
    fullContent: 'Chemical vs physical descaling methods - what works best?',
    authorName: 'Jennifer Park',
    authorTier: 'apprentice',
    category: 'Maintenance',
    replies: 5,
    views: 187,
    lastActivity: '1 day ago',
    replyList: [],
  },
];

const categories = ['All', 'Industrial Design', 'Code Compliance', 'Materials', 'Emergency Response', 'Maintenance'];

const Forum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [threads, setThreads] = useState<ForumThread[]>(initialThreads);
  const [selectedThread, setSelectedThread] = useState<ForumThread | null>(null);
  const [replyText, setReplyText] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadCategory, setNewThreadCategory] = useState('All');

  const filteredThreads =
    selectedCategory === 'All'
      ? threads
      : threads.filter((t) => t.category === selectedCategory);

  const getTierBadgeClass = (tier: string) => {
    switch (tier) {
      case 'master':
        return 'master-plumber';
      case 'journeyman':
        return 'journeyman';
      case 'apprentice':
        return 'apprentice';
      default:
        return '';
    }
  };

  const getTierLabel = (tier: string) => {
    switch (tier) {
      case 'master':
        return 'Master Plumber';
      case 'journeyman':
        return 'Journeyman';
      case 'apprentice':
        return 'Apprentice';
      default:
        return '';
    }
  };

  const handleThreadClick = (thread: ForumThread) => {
    setSelectedThread(thread);
    setReplyText('');
    setReplyAuthor('');
  };

  const handleAddReply = () => {
    if (!replyText.trim() || !replyAuthor.trim() || !selectedThread) return;

    const updatedThread = {
      ...selectedThread,
      replies: selectedThread.replies + 1,
      replyList: [
        ...(selectedThread.replyList || []),
        {
          id: `reply-${Date.now()}`,
          authorName: replyAuthor,
          authorTier: 'apprentice' as const,
          content: replyText,
          timestamp: 'just now',
        },
      ],
    };

    setThreads(threads.map((t) => (t.id === selectedThread.id ? updatedThread : t)));
    setSelectedThread(updatedThread);
    setReplyText('');
    setReplyAuthor('');
  };

  const handleCreateThread = () => {
    if (!newThreadTitle.trim() || newThreadCategory === 'All') return;

    const newThread: ForumThread = {
      id: `thread-${Date.now()}`,
      title: newThreadTitle,
      preview: 'New discussion thread...',
      fullContent: 'New discussion thread...',
      authorName: 'You',
      authorTier: 'apprentice',
      category: newThreadCategory,
      replies: 0,
      views: 1,
      lastActivity: 'just now',
      replyList: [],
    };

    setThreads([newThread, ...threads]);
    setNewThreadTitle('');
    setNewThreadCategory('All');
    setShowCreateForm(false);
  };

  return (
    <>
      <style>{styles}</style>
      <section id="forum" className="forum-section">
        <div className="forum-header">
          <h2>Knowledge Base & Community Forum</h2>
          <p>Ask questions, share solutions, discuss best practices</p>
        </div>

        <button className="create-thread-btn" onClick={() => setShowCreateForm(true)}>
          ✎ START A NEW DISCUSSION
        </button>

        {showCreateForm && (
          <div
            style={{
              background: '#f5f5f7',
              padding: '1.5rem',
              marginBottom: '2rem',
              border: '1px solid #e0e0e0',
            }}
          >
            <div className="form-group">
              <label className="form-label">Discussion Topic</label>
              <input
                type="text"
                className="form-input"
                placeholder="What do you want to discuss?"
                value={newThreadTitle}
                onChange={(e) => setNewThreadTitle(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label">Category</label>
              <select
                className="form-input"
                value={newThreadCategory}
                onChange={(e) => setNewThreadCategory(e.target.value)}
                style={{ cursor: 'pointer' }}
              >
                {categories.slice(1).map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <div
              style={{
                display: 'flex',
                gap: '1rem',
              }}
            >
              <button className="form-submit" onClick={handleCreateThread}>
                Post Discussion
              </button>
              <button
                className="form-submit"
                onClick={() => setShowCreateForm(false)}
                style={{
                  backgroundColor: '#a9a9a9',
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className="forum-tabs">
          {categories.map((category) => (
            <button
              key={category}
              className={`forum-tab ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="forum-threads">
          {filteredThreads.length === 0 ? (
            <p style={{ textAlign: 'center', color: '#a9a9a9', padding: '2rem' }}>
              No discussions in this category yet. Be the first to start one!
            </p>
          ) : (
            filteredThreads.map((thread) => (
              <div
                key={thread.id}
                className="thread-item"
                onClick={() => handleThreadClick(thread)}
              >
                <div className="thread-content">
                  <h3 className="thread-title">{thread.title}</h3>
                  <p className="thread-preview">{thread.preview}</p>
                  <div className="thread-meta">
                    <span>
                      <span className={`author-badge ${getTierBadgeClass(thread.authorTier)}`}>
                        {getTierLabel(thread.authorTier)}
                      </span>
                      {thread.authorName}
                    </span>
                    <span>{thread.lastActivity}</span>
                  </div>
                </div>
                <div className="thread-stats">
                  <div className="reply-count">{thread.replies}</div>
                  <div className="view-count">{thread.views} views</div>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {selectedThread && (
        <div className="modal-overlay" onClick={() => setSelectedThread(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2 className="modal-title">{selectedThread.title}</h2>
              <button className="modal-close" onClick={() => setSelectedThread(null)}>
                ✕
              </button>
            </div>

            <div className="modal-body">
              <div
                style={{
                  marginBottom: '1.5rem',
                  paddingBottom: '1.5rem',
                  borderBottom: '1px solid #e0e0e0',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                  }}
                >
                  <span className={`author-badge ${getTierBadgeClass(selectedThread.authorTier)}`}>
                    {getTierLabel(selectedThread.authorTier)}
                  </span>
                  <strong>{selectedThread.authorName}</strong>
                  <span style={{ color: '#a9a9a9' }}>• {selectedThread.lastActivity}</span>
                </div>
                <p style={{ color: '#1a1a1b', lineHeight: '1.6' }}>
                  {selectedThread.fullContent || selectedThread.preview}
                </p>
              </div>

              {selectedThread.replyList && selectedThread.replyList.length > 0 && (
                <div className="replies-section">
                  <h3 style={{ marginBottom: '1rem', color: '#1a1a1b' }}>
                    {selectedThread.replyList.length} Replies
                  </h3>
                  {selectedThread.replyList.map((reply) => (
                    <div key={reply.id} className="reply-item">
                      <div className="reply-author">
                        <span className={`author-badge ${getTierBadgeClass(reply.authorTier)}`}>
                          {getTierLabel(reply.authorTier)}
                        </span>
                        {reply.authorName}
                        <span className="reply-time">• {reply.timestamp}</span>
                      </div>
                      <div className="reply-text">{reply.content}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="reply-form">
                <h3 style={{ marginBottom: '1rem', color: '#1a1a1b' }}>Add Your Reply</h3>
                <div className="form-group">
                  <label className="form-label">Your Name</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Enter your name"
                    value={replyAuthor}
                    onChange={(e) => setReplyAuthor(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Your Reply</label>
                  <textarea
                    className="form-textarea"
                    placeholder="Share your thoughts..."
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                  />
                </div>
                <button className="form-submit" onClick={handleAddReply}>
                  Post Reply
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Forum;
