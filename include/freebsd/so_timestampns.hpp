#pragma once
#include <string_view>

namespace freebsd {
struct SoTimestampNsDef {
    static constexpr int opt_name = 0x2001;
    static constexpr std::string_view name = "SO_TIMESTAMPNS";
    static constexpr std::string_view desc = "Receive incoming packet nanosecond timestamp in control message";
};
}
