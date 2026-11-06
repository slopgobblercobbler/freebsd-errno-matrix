#pragma once
#include <string_view>

namespace freebsd {
struct SoTimestampDef {
    static constexpr int opt_name = 0x0400;
    static constexpr std::string_view name = "SO_TIMESTAMP";
    static constexpr std::string_view desc = "Receive hardware or software timestamp with packet";
};
}
