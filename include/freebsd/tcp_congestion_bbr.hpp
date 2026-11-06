#pragma once
#include <string_view>

namespace freebsd {
struct TcpCongestionBbrDef {
    static constexpr std::string_view algo_name = "bbr";
    static constexpr std::string_view desc = "Bottleneck Bandwidth and Round-trip propagation time TCP congestion module";
};
}
