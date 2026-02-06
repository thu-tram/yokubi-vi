// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item affix "><a href="Introduction.html">Giới thiệu</a></li><li class="chapter-item affix "><a href="Before-you-begin.html">Trước khi bắt đầu</a></li><li class="chapter-item affix "><a href="Preamble.html">Preamble</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item affix "><li class="part-title">NGƯỜI MỚI BẮT ĐẦU HOÀN TOÀN</li><li class="chapter-item "><a href="Section1/Part1.html">Phần 1: Bắt đầu</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Section1/Part1/Lesson0.html">Bài 0: Cấu trúc cơ bản của câu tiếng Nhật</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson1.html">Bài 1: Trạng thái tồn tại với だ và です</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson2.html">Bài 2: Danh từ, đại từ</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson3.html">Bài 3: Trợ từ và cách ngữ pháp</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson4.html">Bài 4: Động từ</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson5.html">Bài 5: Sở hữu và bổ nghĩa với の</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson6.html">Bài 6: Trợ từ に, へ và から</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson7.html">Bài 7: Động từ phủ định</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson8.html">Bài 8: Tính từ い</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson9.html">Bài 9: Động từ quá khứ</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson10.html">Bài 10: Thể て</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson11.html">Bài 11: Thể て với vai trò trợ động từ và động từ cho – nhận</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson12.html">Bài 12: Yêu cầu nhẹ với てください và thể mệnh lệnh</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson13.html">Bài 13: Trợ từ で, では và じゃ</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson14.html">Bài 14: Mở rộng chi tiết với mệnh đề quan hệ</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson15.html">Bài 15: Tính từ な</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson16.html">Bài 16: Động từ bất quy tắc và động từ する</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson17.html">Bài 17: Lịch sự cơ bản và thể ます</a></li><li class="chapter-item "><a href="Section1/Part1/Lesson18.html">Bài 18: Sự tồn tại với いる và ある, cùng với である</a></li></ol></li><li class="chapter-item "><a href="Section1/Part2.html">Phần 2: Tiếp tục tiến lên</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Section1/Part2/Lesson19.html">Bài 19: Câu hỏi với か</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson20.html">Bài 20: Câu hỏi với の và dạng giải thích のだ</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson21.html">Bài 21: Mở rộng với も và と</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson22.html">Bài 22: Hành động đang diễn ra và trạng thái với ている và てある</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson23.html">Bài 23: Từ chỉ thị với nhóm こそあど</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson24.html">Bài 24: Thể bị động và cặp động từ tự động / tha động</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson25.html">Bài 25: Thể khả năng và できる</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson26.html">Bài 26: Diễn đạt ý muốn và mong muốn với たい và ほしい</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson27.html">Bài 27: Diễn đạt "nếu" và "khi" với bốn loại điều kiện</a></li><li class="chapter-item "><a href="Section1/Part2/Lesson28.html">Bài 28: Ôn tập động từ</a></li></ol></li><li class="chapter-item "><li class="part-title">LÃNH ĐỊA TUYỆT ĐỐI</li><li class="chapter-item "><a href="Section2/Section2.html">Phần 2: Giới thiệu</a></li><li class="chapter-item "><a href="Section2/Part3.html">Phần 3: Mở rộng câu</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Section2/Part3/Lesson29.html">Bài 29: Trợ từ cuối câu với ね, な, よ, ぞ, ぜ, わ</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson30.html">Bài 30: Trích dẫn với と, って và という</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson31.html">Bài 31: Trạng từ</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson32.html">Bài 32: Yêu cầu nhẹ với なさい và cấm đoán với な</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson33.html">Bài 33: Từ để hỏi: なに, だれ, どれ, いつ, v.v.</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson34.html">Bài 34: か, も và でも như bộ bổ nghĩa cho từ để hỏi</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson35.html">Bài 35: Danh từ chung và danh hóa với 事, 物, ところ và の</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson36.html">Bài 36: Tạo danh sách với や, とか, など, と, か và に</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson37.html">Bài 37: Liên từ đối lập với が, けど, しかし và ても/でも</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson38.html">Bài 38: Diễn đạt đồng thời với ながら, あいだ, うちに và つつ</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson39.html">Bài 39: Diễn đạt lý do với から, そして, ので, で</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson40.html">Bài 40: So sánh với より và の方が</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson41.html">Bài 41: Đếm số lượng</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson42.html">Bài 42: Liên kết câu với のに, ように, ために, せいで và おかげで</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson43.html">Bài 43: Diễn đạt sự giống nhau và tin đồn với みたい, らしい, ぽい và そう</a></li><li class="chapter-item "><a href="Section2/Part3/Lesson44.html">Bài 44: Sai / không được phép với だめ, いけない, ならない và cách nói "phải"</a></li></ol></li><li class="chapter-item "><a href="Section2/Part4.html">Phần 4: Thêm gia vị và "phần còn lại"</a><a class="toggle"><div>❱</div></a></li><li><ol class="section"><li class="chapter-item "><a href="Section2/Part4/Lesson45.html">Bài 45: Liệt kê và lặp hành động với 〜たり〜たり và ては</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson46.html">Bài 46: "Chỉ" với だけ, のみ, ばかり và しか</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson47.html">Bài 47: Vẫn, đã, và lại với もう, まだ và また</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson48.html">Bài 48: Xin phép với いい và lời mời phủ định với ませんか</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson49.html">Bài 49: Nhiều cách dùng của とする</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson50.html">Bài 50: Thử làm gì đó với てみる</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson51.html">Bài 51: Suy nghĩ và cảm xúc với と思う và と考える</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson52.html">Bài 52: Thêm các dạng câu hỏi với っけ, かな, かい, だい, じゃない và じゃん</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson53.html">Bài 53: Thể sai khiến</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson54.html">Bài 54: Trở thành và tạo ra với なる và する</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson55.html">Bài 55: Đại từ phản thân với 自分</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson56.html">Bài 56: Mở rộng phủ định với なくて, ないで, ず và ずに</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson57.html">Bài 57: Trợ động từ diễn tả hối tiếc và an tâm với てしまう và ておく</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson58.html">Bài 58: Hướng đi của hành động với ていく và てくる</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson59.html">Bài 59: Các cách dùng khẩu ngữ của だって</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson60.html">Bài 60: Kỳ vọng với わけ, はず, べき, ものだ và かもしれない</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson61.html">Bài 61: Ước chừng với ころ và くらい, và giới hạn với まで, ほど, すぎる</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson62.html">Bài 62: Mốc thời gian với 後, 前, 先 và 時</a></li><li class="chapter-item "><a href="Section2/Part4/Lesson63.html">Bài 63: Thêm một chút: Một số trợ từ và trợ động từ khác</a></li></ol></li><li class="chapter-item "><a href="ClosingWords.html">Lời kết</a></li><li class="chapter-item affix "><li class="spacer"></li><li class="chapter-item "><a href="FAQ.html">Câu hỏi thường gặp</a></li><li class="chapter-item "><a href="Credits.html">Ghi công</a></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
