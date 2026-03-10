// src/components/Sidebar.tsx
interface SidebarProps {
    isOpen?: boolean
    onClose?: () => void
}

export default function Sidebar({ isOpen = false, onClose }: SidebarProps) {
    // Version mobile (drawer)
    if (!isOpen) {
        return (
            <aside
                className="hidden md:flex flex-col w-50 p-6 gap-4"
                style={{ background: "var(--bg-sidebar)", color: "var(--text-main)" }}
            >
                <h2 className="font-bold text-lg mb-4">Design Tools</h2>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Text
                </button>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Images
                </button>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Shapes
                </button>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Colors
                </button>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Upload
                </button>
            </aside>
        )
    }

    // Version mobile (drawer overlay)
    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
                onClick={onClose}
            />

            {/* Drawer */}
            <aside
                className="fixed top-16 left-0 w-64 p-6 gap-4 h-full z-50 md:hidden flex flex-col"
                style={{ background: "var(--bg-sidebar)", color: "var(--text-main)" }}
            >
                <div className="flex justify-between items-center mb-4">
                    <h2 className="font-bold text-lg">Design Tools</h2>
                    <button
                        onClick={onClose}
                        className="text-2xl hover:opacity-70"
                    >
                        ×
                    </button>
                </div>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Text
                </button>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Images
                </button>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Shapes
                </button>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Colors
                </button>
                <button className="tool-btn px-4 py-2 rounded hover:bg-opacity-80 transition-colors"
                    style={{ background: "var(--primary)", color: "white" }}
                >
                    Upload
                </button>
            </aside>
        </>
    )
}